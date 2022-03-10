import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${theme.color.border};
  padding: 4rem 0;
  background-color: ${theme.color.white};

  & > span {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.25;
  }
`;
