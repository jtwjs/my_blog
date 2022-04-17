import type { NextPage } from "next";

import BlogLayout from "@components/layout/BlogLayout";
import * as S from "./blog.style";

const BlogPage: NextPage = () => {
  return (
    <BlogLayout>
      <section css={S.section}></section>
    </BlogLayout>
  );
};

export default BlogPage;
