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
  width: 16rem;
  height: 3rem;
  border-radius: 3.2rem;
  border: 1px solid ${theme.color.border};
  padding: 0 0.8rem 0 3.2rem;
  font-size: ${theme.fontSize.small};

  &:focus {
    border-color: ${theme.color.primary};
  }
`;
