import { css, Theme } from "@emotion/react";

export const opener = (theme: Theme, isOpened: boolean) => css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.8rem 0 0.8rem 2.4rem;
  font-size: ${theme.fontSize.small};
  font-weight: 700;
  color: ${theme.color.text_base};
  text-transform: capitalize;
  text-align: left;

  & > svg {
    fill: ${theme.color.text_reverseReflection};
    transform: ${isOpened && "rotate(90deg)"};
    pointer-events: none;
  }
`;

export const subCategories = (theme: Theme, isOpened: boolean) => css`
  height: ${isOpened ? "auto" : "0"};
  transition: height 100ms ease-out;
  overflow: hidden;

  & > li {
    padding: 0.8rem 0 0.8rem 3.6rem;
    font-size: ${theme.fontSize.small};
  }
`;
