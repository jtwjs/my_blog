import { css, Theme } from "@emotion/react";

export const section = (theme: Theme) => css`
  @media screen and ${theme.device.tablet} {
    width: 100%;
  }
`;
