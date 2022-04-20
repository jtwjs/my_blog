import { FC, useRef, useState, useEffect } from "react";

import PostCard from "@components/post/PostCard";
import PrevButton from "@components/button/prevButton/PrevButton";
import NextButton from "@components/button/nextButton/NextButton";
import { IPostCard } from "@type/blog";
import * as S from "./PostSlider.style";

type PostSliderProps = {
  label: string;
  slides: IPostCard[];
};
const PostSlider: FC<PostSliderProps> = ({ label, slides }) => {
  const slideRef = useRef<HTMLDivElement>(null);

  const [sliderOpt, setSliderOpt] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 500,
  });
  const [slideItems, setSlideItems] = useState(slides);

  const nextSlide = () => {
    if (sliderOpt.activeIndex === slideItems.length - 1) {
      return setSliderOpt({
        ...sliderOpt,
        translate: 0,
        activeIndex: 0,
      });
    }

    setSliderOpt({
      ...sliderOpt,
      activeIndex: sliderOpt.activeIndex + 1,
      translate: (sliderOpt.activeIndex + 1) * slideRef?.current?.clientWidth!,
    });
  };

  const prevSlide = () => {
    if (sliderOpt.activeIndex === 0) {
      return setSliderOpt({
        ...sliderOpt,
        translate: (slideItems.length - 1) * slideRef?.current?.clientWidth!,
        activeIndex: slideItems.length - 1,
      });
    }

    setSliderOpt({
      ...sliderOpt,
      activeIndex: sliderOpt.activeIndex - 1,
      translate: (sliderOpt.activeIndex - 1) * slideRef?.current?.clientWidth!,
    });
  };

  useEffect(() => {
    setSlideItems((prev) => {
      const update = [...prev];
      const length = update.length;
      update[length] = { ...update[0], id: `${update[0].id}-new` };
      return update;
    });
  }, []);

  useEffect(() => {
    if (sliderOpt.activeIndex === slideItems.length - 1) {
      return setSliderOpt({
        translate: 0,
        transition: 0,
        activeIndex: 0,
      });
    }
    setSliderOpt({
      ...sliderOpt,
      transition: 500,
    });
  }, [sliderOpt.activeIndex]);

  return (
    <div css={S.container}>
      <div css={S.header}>
        <span id={`${label}-slider`}>{label}</span>
        <div css={S.navigation}>
          <PrevButton css={S.navgationBtn} label="이전" onClick={prevSlide} />
          <NextButton css={S.navgationBtn} label="다음" onClick={nextSlide} />
        </div>
      </div>
      <div css={S.slider} role="group" aria-labelledby={`${label}-slider`}>
        <div
          css={(theme) =>
            S.content(
              theme,
              slideItems.length,
              sliderOpt.translate,
              sliderOpt.transition
            )
          }
        >
          {slideItems.map(({ id, thumbnail, createAt, title, desc }) => (
            <PostCard
              key={id}
              ref={slideRef}
              thumbnail={thumbnail}
              createAt={createAt}
              title={title}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSlider;
