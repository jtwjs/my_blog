import type { NextPage } from "next";

import Categories from "@components/categories/Categories";
import * as S from "./blog.style";

const BlogPage: NextPage = () => {
  return (
    <>
      <aside css={S.sidebar}>
        <Categories />
      </aside>
      <section css={S.section}></section>
    </>
  );
};

export default BlogPage;
