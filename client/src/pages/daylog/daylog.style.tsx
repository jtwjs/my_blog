import { css, Theme } from "@emotion/react";

export const title = (theme: Theme) => css`
  margin-top: -1.8rem;
  font-size: ${theme.fontSize.small};
  font-weight: 600;
  color: ${theme.color.primary};
  text-transform: uppercase;
`;
