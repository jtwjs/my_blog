import { css, Theme } from "@emotion/react";

export const header = (theme: Theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  border-bottom: 1px solid ${theme.color.border};
  padding: 0 2.4rem 0 6.4rem;
  background-color: ${theme.color.bg_secondary};
  z-index: ${theme.zindex.header};

  @media screen and ${theme.device.tablet} {
    padding-left: 2.4rem;
  }
`;

export const menuBtn = (theme: Theme) => css`
  position: absolute;
  left: 2rem;
  display: block;

  @media screen and ${theme.device.tablet} {
    display: none;
  }
`;

export const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 0;
`;

export const title = (theme: Theme) => css`
  font-size: ${theme.fontSize.xl};
  font-weight: 500;
`;

export const links = (theme: Theme) => css`
  position: absolute;
  right: 2.4rem;
  display: flex;
  align-items: center;
  height: 3rem;
  background-color: ${theme.color.bg_secondary};

  @media screen and ${theme.device.tablet} {
    position: relative;
    right: 0;
  }
`;

export const searchBar = (theme: Theme) => css`
  margin-right: 0;

  @media screen and ${theme.device.tablet} {
    margin-right: 1.6rem;
`;

export const navBar = (theme: Theme) => css`
  display: none;

  @media screen and ${theme.device.tablet} {
    display: block;
  }
`;

export const darkSwitch = (theme: Theme) => css`
  display: none;

  @media screen and ${theme.device.tablet} {
    display: block;
  }
`;
