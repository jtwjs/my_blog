import { IPostCard } from "@type/blog";

export const getCalcSlides = (slides: IPostCard[]): IPostCard[] => {
  const update = [...slides];
  const firstItem = update[0];
  const lastItem = update[update.length - 1];
  const length = update.length;
  update[length] = { ...firstItem, id: `${firstItem.id}-copy` };

  return [{ ...lastItem, id: `${lastItem.id}-copy` }, ...update];
};

export const getExpansionCalcSlides = (slides: IPostCard[]): IPostCard[] => {
  const update = [...slides];
  const firstItem = update[0];
  const secondItem = update[1];
  const lastItem = update[update.length - 1];
  const lastSecondItem = update[update.length - 2];
  const length = update.length;
  update[length] = { ...firstItem, id: `${firstItem.id}-copy` };
  update[length + 1] = { ...secondItem, id: `${secondItem.id}-copy` };

  return [
    { ...lastSecondItem, id: `${lastSecondItem.id}-copy` },
    { ...lastItem, id: `${lastItem.id}-copy` },
    ...update,
  ];
};
