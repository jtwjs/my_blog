import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  margin-top: 1rem;
  border-radius: 2.5rem;
  background-color: ${theme.color.bg_primary};
  box-shadow: ${theme.boxShadow.primary};
  overflow: hidden;
`;

export const container = (theme: Theme) => css`
  padding: 0 1rem;
  background-color: ${theme.color.bg_primary};
`;
