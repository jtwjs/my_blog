import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  height: 3rem;
  margin-right: 1.6rem;
  background-color: ${theme.color.white};
`;

export const list = (theme: Theme) => css`
  display: flex;
  height: 100%;

  &:hover {
    li > a {
      color: ${theme.color.text_gray};
    }
  }
`;
