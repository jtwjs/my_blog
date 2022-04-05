import { FC, MouseEvent } from "react";

import ArrowIcon from "@assets/icons/ic_arrow-right.svg";
import * as S from "./Category.style";

type CategoryProps = {
  category: string;
  isOpened: boolean;
  handleOpen: (e: MouseEvent<HTMLElement>) => void;
};

const Category: FC<CategoryProps> = ({
  children,
  category,
  isOpened,
  handleOpen,
}) => {
  const uid = `category-${category}`;

  return (
    <li>
      <button
        css={(theme) => S.opener(theme, isOpened)}
        type="button"
        id={uid}
        aria-expanded={isOpened}
        data-category={category}
        onClick={handleOpen}
      >
        {children}
        <ArrowIcon />
      </button>
      <ul
        css={(theme) => S.subCategories(theme, isOpened)}
        role="group"
        aria-labelledby={uid}
      >
        <li>Typescript</li>
        <li>Javascript</li>
      </ul>
    </li>
  );
};

export default Category;
