import { css, Theme } from "@emotion/react";

export const project = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 50%);

  &:nth-of-type(odd) {
    &::before {
      content: "";
      position: relative;
      left: 100%;
      width: 2px;
      height: 100%;
      background-color: ${theme.color.border};
    }

    & > div {
      grid-column-start: 2;
      grid-column-end: 2;
      padding-left: 1.8rem;

      &::before {
        left: 0;
        right: unset;
        transform: translateX(-40%);
      }

      & time {
        align-self: flex-start;
      }
    }
  }

  &:nth-of-type(even) {
    &::after {
      content: "";
      width: 2px;
      height: 100%;
      background-color: ${theme.color.border};
    }

    & > div {
      grid-column-start: 1;
      grid-column-end: -2;
      padding-right: 1.8rem;

      &::before {
        right: 0;
        left: unset;
        transform: translateX(57%);
      }

      & time {
        align-self: flex-end;
      }
    }
  }

  &:last-of-type {
    &::before,
    &::after {
      content: none;
    }
  }
`;

export const container = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid ${theme.color.primary};
    background-color: ${theme.color.text_reflection};
  }

  & > a {
    display: flex;
    flex-direction: column;
    transition: all 300ms ease;

    &:hover {
      box-shadow: ${theme.boxShadow.project};
    }
  }
`;

export const date = (theme: Theme) => css`
  font-size: ${theme.fontSize.small};
`;

export const content = (theme: Theme) => css`
  height: 100%;
  border: 1px solid ${theme.color.border};
  border-radius: 0.6rem;
  overflow: hidden;

  & > figcaption {
    padding: 1rem;
    overflow: hidden;

    & > h3 {
      margin-bottom: 0.8rem;
      font-size: ${theme.fontSize.small};
      white-space: nowrap;
      color: ${theme.color.text_title};
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & > p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 2.4em;
      font-size: ${theme.fontSize.xs};
      line-height: 1.2;
      color: ${theme.color.text_base};
      text-align: left;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
    }
  }
`;

export const thumbnail = (theme: Theme) => css`
  position: relative;
  padding-top: 61.84%;
  background-color: ${theme.color.primary};

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    aspect-ratio: 498 / 308;
  }
`;
