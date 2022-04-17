import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  display: none;

  @media screen and ${theme.device.tablet} {
    position: fixed;
    display: flex;
    width: 28rem;
    height: 100vh;
    border-right: 1px solid ${theme.color.border};
    padding: 5.5rem 0 9.85rem;
    z-index: ${theme.zindex.aside};
  }
`;
