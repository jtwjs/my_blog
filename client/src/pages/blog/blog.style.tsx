import { css, Theme } from "@emotion/react";

export const sidebar = (theme: Theme) => css`
  display: none;

  & > nav {
    position: fixed;
    width: inherit;
  }

  @media screen and ${theme.device.tablet} {
    display: flex;
    width: 28rem;
    height: calc(100% - 5.5rem);
    border-right: 1px solid ${theme.color.border};
  }
`;

export const section = (theme: Theme) => css`
  @media screen and ${theme.device.tablet} {
    width: calc(100% - 28rem);
    margin-left: auto;
  }
`;
