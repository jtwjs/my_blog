import type { NextPage } from "next";

import BlogLayout from "@components/layout/BlogLayout";
import PostSlider from "@components/post/PostSlider";
import { dummyPostCards } from "@assets/dummy/post";
import * as S from "./blog.style";

const BlogPage: NextPage = () => {
  return (
    <BlogLayout>
      <section>
        <div css={S.header}>
          <h2>blog</h2>
          <p>
            <span className="a11y">subtitle:</span>
            개발 관련 경험과 일상을 기록하고 있습니다. 종종 공유하고 싶은 글이
            있다면 번역해서 게시하고 있습니다.
          </p>
        </div>
        <PostSlider id="populer" label="인기 글" slides={dummyPostCards} />
        <PostSlider id="recent" label="최신 글" slides={dummyPostCards} />
      </section>
    </BlogLayout>
  );
};

export default BlogPage;
