import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${theme.color.border};
  padding: 4rem 0;
  background-color: ${theme.color.bg_secondary};

  & > span {
    font-size: ${theme.fontSize.small};
    font-weight: 500;
    line-height: 1.25;
  }
`;
