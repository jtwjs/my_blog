import { css, Theme } from "@emotion/react";

export const main = (theme: Theme) => css`
  position: relative;
  min-height: calc(100vh - 15.4rem);
  padding-top: 5.5rem;
  font-size: ${theme.fontSize.base};
  background-color: ${theme.color.bg_primary};

  > section {
    min-height: inherit;
    padding: 2.4rem;
    text-align: center;
  }

  @media screen and ${theme.device.tablet} {
    min-height: calc(100vh - 15.3rem);
  }
`;
