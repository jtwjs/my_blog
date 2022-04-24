import { css, Theme } from "@emotion/react";

type wrapperProps = {
  isShowAside: boolean;
};

export const wrapper = (theme: Theme, { isShowAside }: wrapperProps) =>
  css`
    position: fixed;
    top: 0;
    left: 0;
    width: 20rem;
    height: 100vh;
    padding-top: 5.5rem;
    border-right: 1px solid ${theme.color.border};
    background-color: ${theme.color.bg_secondary};
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    z-index: ${theme.zindex.aside};

    ${isShowAside === true &&
    `
      transform: translateX(0);
    `}

    @media screen and ${theme.device.tablet} {
      display: none;
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

export const category = (theme: Theme) => css`
  border-top: 1px solid ${theme.color.border};
`;

export const darkSwitch = (theme: Theme) => css`
  position: absolute;
  bottom: 0;
  display: block;

  @media screen and ${theme.device.tablet} {
    display: none;
  }
`;
