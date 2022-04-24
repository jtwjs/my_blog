import { useRef, useState, useCallback, useEffect, RefObject } from "react";

import { IPostCard, SliderOption } from "@type/blog";
import { getCalcSlides, getExpansionCalcSlides } from "@utils/helper/postSlide";

interface UsePostSlider {
  sliderRef: RefObject<HTMLDivElement>;
  slideRef: RefObject<HTMLDivElement>;
  slideItems: IPostCard[];
  visibleNumber: number;
  sliderOpt: SliderOption;
  prevSlide: () => void;
  nextSlide: () => void;
}

const usePostSlider = (slides: IPostCard[]): UsePostSlider => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const [visibleNumber, setVisibleNumber] = useState<number>(100);
  const [sliderOpt, setSliderOpt] = useState<SliderOption>({
    activeIndex: 1,
    translate: 0,
  });
  const [slideItems, setSlideItems] = useState(slides);

  const prevSlide = useCallback(() => {
    sliderRef.current!.style.transition = `transform 500ms ease-in-out`;

    setSliderOpt({
      ...sliderOpt,
      activeIndex: Math.max(sliderOpt.activeIndex - 1, 0),
      translate:
        Math.max(sliderOpt.activeIndex - 1, 0) *
        slideRef?.current?.clientWidth!,
    });
  }, [sliderOpt]);

  const nextSlide = useCallback(() => {
    sliderRef.current!.style.transition = `transform 500ms ease-in-out`;

    setSliderOpt({
      ...sliderOpt,
      activeIndex: Math.min(
        sliderOpt.activeIndex + 1,
        slideItems.length - visibleNumber
      ),
      translate:
        Math.min(sliderOpt.activeIndex + 1, slideItems.length - visibleNumber) *
        slideRef?.current?.clientWidth!,
    });
  }, [sliderOpt, visibleNumber]);

  useEffect(() => {
    setVisibleNumber(
      window.screen.width >= 1200 ? 4 : window.screen.width >= 768 ? 2 : 1
    );
  }, []);

  useEffect(() => {
    const setSlider = () => {
      sliderRef.current!.style.transition = "0ms";
      const visible =
        window.screen.width >= 1200 ? 4 : window.screen.width >= 768 ? 2 : 1;
      setVisibleNumber(visible);

      if (visible < slides.length) {
        setSliderOpt({
          ...sliderOpt,
          translate: slideRef.current?.clientWidth!,
        });
      } else {
        setSlideItems(slides);
        setSliderOpt({
          ...sliderOpt,
          translate: 0,
        });
      }
    };
    window.addEventListener("resize", setSlider);

    return () => {
      window.removeEventListener("resize", setSlider);
    };
  }, []);

  useEffect(() => {
    if (visibleNumber >= slides.length) {
      return;
    }
    sliderRef.current!.style.transition = "0ms";
    const idx = ~~Math.sqrt(visibleNumber);
    setSliderOpt({
      ...sliderOpt,
      activeIndex: idx,
      translate: idx * slideRef?.current?.clientWidth!,
    });

    const newSlideItems =
      visibleNumber === 4
        ? getExpansionCalcSlides(slides)
        : getCalcSlides(slides);

    setSlideItems(newSlideItems);
  }, [visibleNumber]);

  useEffect(() => {
    const initActiveIndex = () => {
      if (sliderOpt.activeIndex === slideItems.length - visibleNumber) {
        sliderRef.current!.style.transition = "0ms";
        const idx = 2 - Math.min(visibleNumber, 2);
        setSliderOpt({
          ...sliderOpt,
          translate: idx * slideRef?.current?.clientWidth!,
          activeIndex: idx,
        });
      }

      if (sliderOpt.activeIndex === 0) {
        sliderRef.current!.style.transition = "0ms";
        setSliderOpt({
          ...sliderOpt,
          translate:
            (slideItems.length - visibleNumber) *
            slideRef?.current?.clientWidth!,
          activeIndex: slideItems.length - visibleNumber,
        });
      }
    };
    sliderRef.current?.addEventListener("transitionend", initActiveIndex);

    return () => {
      sliderRef.current?.removeEventListener("transitionend", initActiveIndex);
    };
  }, [sliderOpt.activeIndex]);

  return {
    sliderRef,
    slideRef,
    slideItems,
    visibleNumber,
    sliderOpt,
    prevSlide,
    nextSlide,
  };
};

export default usePostSlider;
