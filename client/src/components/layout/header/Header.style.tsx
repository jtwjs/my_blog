import { css, Theme } from "@emotion/react";

export const header = (theme: Theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid ${theme.color.border};
  padding: 0 24px;
`;

export const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

export const title = (theme: Theme) => css`
  font-size: ${theme.fontSize.xl};
`;

export const links = css`
  display: flex;
  align-items: center;
`;

export const searchBar = css`
  margin-right: 1.6rem;
`;
