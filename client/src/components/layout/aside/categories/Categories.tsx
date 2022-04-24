import { FC, useState, useCallback, MouseEvent } from "react";

import Category from "./Category";
import * as S from "./Categories.style";

type CategoriesProps = {
  className?: string;
};

const Categories: FC<CategoriesProps> = ({ className }) => {
  const [openedCategory, setOpenedCategory] = useState<string>("programming");

  const openCategory = useCallback(
    <T extends HTMLElement>(e: MouseEvent<T>) => {
      const {
        dataset: { category },
      } = e.target as HTMLButtonElement;

      setOpenedCategory((prev) =>
        prev === category ? "" : (category as string)
      );
    },
    []
  );

  return (
    <nav css={S.wrapper} className={className}>
      <ul css={S.categories}>
        <Category
          category="programming"
          isOpened={openedCategory === "programming"}
          handleOpen={openCategory}
        >
          programming
        </Category>
        <Category
          category="review"
          isOpened={openedCategory === "review"}
          handleOpen={openCategory}
        >
          review
        </Category>
        <Category
          category="회고"
          isOpened={openedCategory === "회고"}
          handleOpen={openCategory}
        >
          회고
        </Category>
      </ul>
    </nav>
  );
};

export default Categories;
