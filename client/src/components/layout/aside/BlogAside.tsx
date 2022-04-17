import { FC } from "react";

import Categories from "./categories/Categories";
import * as S from "./BlogAside.style";

const BlogAside: FC = () => {
  return (
    <aside css={S.wrapper}>
      <Categories />
    </aside>
  );
};

export default BlogAside;
