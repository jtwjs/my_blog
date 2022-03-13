import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  width: 2.4rem;
  height: 2.4rem;

  & > svg {
    fill: ${theme.color.icon};
  }
`;
