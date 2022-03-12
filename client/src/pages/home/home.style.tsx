import { css, Theme } from "@emotion/react";

export const home = (theme: Theme) => css`
  margin-bottom: 4rem;
`;

export const fallback = (theme: Theme) => css`
  position: relative;
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
  padding-top: 43.75%;
  margin-bottom: 2rem;
  background-color: ${theme.color.darkGray};

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and ${theme.device.tablet} {
    padding-top: 29.883%;
  }
`;

export const title = (theme: Theme) => css`
  margin-bottom: 2rem;
  font-size: 3.2rem;
`;

export const subTitle = (theme: Theme) => css`
  margin-bottom: 2rem;
  font-size: 1.9rem;
  color: ${theme.color.primary};
`;

export const linkBtn = (theme: Theme) => css`
  display: flex;
  align-items: center;
  width: max-content;
  height: 4.5rem;
  margin: 0 auto;
  border-radius: 4px;
  padding: 0 2rem;
  font-size: 1.6rem;
  color: ${theme.color.white};
  background-color: ${theme.color.primary};
`;

export const feature = (theme: Theme) => css`
  border-top: 1px solid ${theme.color.border};
  padding: 2rem 0;

  @media screen and ${theme.device.tablet} {
    display: flex;
  }
`;

export const featureItem = (theme: Theme) => css`
  padding: 0 4rem;

  &:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }

  & > dt {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: ${theme.color.black};
    text-align: left;
    text-transform: capitalize;
  }

  & > dd {
    font-size: 1.6rem;
    color: ${theme.color.text_base};
    text-align: left;
  }
`;
