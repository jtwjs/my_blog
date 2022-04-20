import { css, Theme } from "@emotion/react";

export const container = (theme: Theme) => css`
  position: relative;
  margin-bottom: 2.5rem;
  text-align: left;
`;

export const header = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.8rem;

  & > span {
    font-size: ${theme.fontSize.base};
    font-weight: 500;
    color: ${theme.color.text_reverseReflection};
  }
`;

export const slider = (theme: Theme) => css`
  position: relative;
  overflow: hidden;
`;

export const content = (
  theme: Theme,
  length: number,
  translate: number,
  transition: number
) => css`
  display: grid;
  grid-template-columns: repeat(${length}, 1fr);
  width: ${100 * length}%;
  height: 100%;
  transform: translateX(-${translate}px);
  transition: transform ease-in-out ${transition}ms;
`;

export const navigation = (theme: Theme) => css`
  display: flex;
  align-items: center;
  padding-right: 2.5rem;
`;

export const navgationBtn = (theme: Theme) => css`
  width: 2.6rem;
  height: 2.6rem;
  padding: 0.6rem;

  & > svg {
    fill: ${theme.color.text_base};
  }
`;
