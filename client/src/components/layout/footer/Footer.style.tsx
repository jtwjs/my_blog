import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${theme.color.border};
  padding: 4rem 0;
  background-color: ${theme.color.bg_secondary};
  z-index: ${theme.zindex.footer};
`;

export const container = (theme: Theme) => css`
  position: relative;
  display: flex;
  align-items: center;

  & > span {
    font-size: ${theme.fontSize.small};
    font-weight: 500;
    line-height: 1.25;
  }
`;

export const github = (theme: Theme) => css`
  position: absolute;
  right: -3.6rem;
  width: 32px;
  height: 32px;

  & > svg {
    fill: ${theme.color.text_reverseReflection};
  }
`;
