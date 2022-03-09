import { css, Theme } from "@emotion/react";

export const wrapper = css`
  position: relative;
  display: flex;
  align-items: center;
`;

export const searchIcon = css`
  position: absolute;
  left: 0.5rem;
  pointer-events: none;
`;

export const searchBar = (theme: Theme) => css`
  width: 1rem;
  height: 3.2rem;
  border-radius: 3.2rem;
  border: 0;
  padding: 0 0.8rem 0 3.2rem;
  font-size: ${theme.fontSize.small};
  transform: translateX(-1rem);
  transition: all 0.2s ease;

  &:focus {
    width: calc(100vw - 8.8rem);
    border: 1px solid ${theme.color.primary};
    transform: translateX(0);
  }

  @media screen and ${theme.device.tablet} {
    width: 16rem;
    height: 3rem;
    border: 1px solid ${theme.color.border};
    transform: none;

    &:focus {
      width: 16rem;
    }
  }
`;
