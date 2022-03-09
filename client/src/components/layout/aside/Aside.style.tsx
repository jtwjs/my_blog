import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100vh;
  padding-top: 5.5rem;
  border-right: 1px solid ${theme.color.border};
  z-index: ${theme.zindex.aside};

  @media screen and ${theme.device.tablet} {
  }
`;

export const navBar = (theme: Theme) => css`
  height: auto;
  margin-right: 0;
  padding: 0.8rem 0 1.2rem;

  & > ul {
    flex-direction: column;

    & > li {
      padding: 0.8rem 0;

      &:not(:last-of-type) {
        margin-right: 0;
      }

      & > a {
        padding-left: 2.4rem;
        font-size: ${theme.fontSize.base};
        font-weight: 600;
      }
    }
  }
`;
