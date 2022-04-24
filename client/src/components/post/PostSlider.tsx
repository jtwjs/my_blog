import { FC } from "react";

import PostCard from "@components/post/PostCard";
import PrevButton from "@components/button/prevButton/PrevButton";
import NextButton from "@components/button/nextButton/NextButton";
import { IPostCard } from "@type/blog";
import * as S from "./PostSlider.style";
import usePostSlider from "./hooks/usePostSlider";

type PostSliderProps = {
  id: string;
  label: string;
  slides: IPostCard[];
};
const PostSlider: FC<PostSliderProps> = ({ id, label, slides }) => {
  const {
    sliderRef,
    slideRef,
    slideItems,
    visibleNumber,
    sliderOpt,
    prevSlide,
    nextSlide,
  } = usePostSlider(slides);

  return (
    <div css={S.container}>
      <div css={S.header}>
        <span id={`${id}-slider`}>{label}</span>
        <div css={S.navigation}>
          <PrevButton
            css={S.navgationBtn}
            label="이전"
            disabled={visibleNumber >= slides.length}
            onClick={prevSlide}
          />
          <NextButton
            css={S.navgationBtn}
            label="다음"
            disabled={visibleNumber >= slides.length}
            onClick={nextSlide}
          />
        </div>
      </div>
      <div css={S.slider} role="group" aria-labelledby={`${id}-slider`}>
        <div
          css={(theme) =>
            S.content(
              theme,
              slideItems.length,
              visibleNumber,
              sliderOpt.translate
            )
          }
          ref={sliderRef}
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
