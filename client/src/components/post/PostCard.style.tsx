import { css, Theme } from "@emotion/react";

export const post = (theme: Theme) => css`
  padding: 0 2.5rem;
`;

export const thumbnail = (theme: Theme) => css`
  position: relative;
  width: 100%;
  margin-bottom: 1.2rem;
  padding-top: 64%;

  & > img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.color.primary};
  }
`;

export const description = (theme: Theme) => css`
  & > time {
    margin-bottom: 0.5rem;
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.text_gray};
  }

  & > h4 {
    margin-bottom: 0.8rem;
    font-size: ${theme.fontSize.lg};
    color: ${theme.color.text_title};
  }

  & > p {
    display: -webkit-box;
    font-size: ${theme.fontSize.small};
    color: ${theme.color.text_base};
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
