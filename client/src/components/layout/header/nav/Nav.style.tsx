import { css, Theme } from "@emotion/react";

export const wrapper = css`
  height: 4rem;
  margin-right: 1.6rem;
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
