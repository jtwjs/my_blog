import { css, Theme } from "@emotion/react";

export const header = (theme: Theme) => css`
  margin-bottom: 4rem;
  text-align: left;

  & > h2 {
    margin-bottom: 1.6rem;
    font-size: ${theme.fontSize.lg};
    font-weight: 500;
    color: ${theme.color.primary};
    text-transform: capitalize;
  }

  & > p {
    color: ${theme.color.text_reverseReflection};
  }
`;
