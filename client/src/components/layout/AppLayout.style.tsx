import { css, Theme } from "@emotion/react";

export const main = (theme: Theme) => css`
  min-height: calc(100vh - 15.4rem);
  padding-top: 5.5rem;
  font-size: ${theme.fontSize.base};
  background-color: ${theme.color.bg_primary};

  @media screen and ${theme.device.tablet} {
    min-height: calc(100vh - 15.3rem);
  }
`;

export const container = (theme: Theme) => css`
  min-height: inherit;
  padding: 24px;
  text-align: center;
`;
