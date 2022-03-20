import { css, Theme } from "@emotion/react";

export const header = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 5rem;
  color: ${theme.color.text_reflection};
  background-color: ${theme.color.primary};
`;

export const navigation = (theme: Theme) => css`
  position: absolute;
  bottom: 5.2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;

  @media screen and ${theme.device.tablet} {
    & > button {
      width: 3.6rem;
      height: 3.6rem;
    }
  }
`;

export const year = (theme: Theme) => css`
  display: block;
  font-size: ${theme.fontSize.small};
  font-weight: 600;

  @media screen and ${theme.device.tablet} {
    font-size: ${theme.fontSize.base};
  }
`;

export const date = (theme: Theme) => css`
  font-size: ${theme.fontSize.titleSize};
  font-weight: 500;
`;

export const day = (theme: Theme) => css`
  display: block;
  margin-bottom: 0.5rem;
  font-size: ${theme.fontSize.xs};
  text-transform: uppercase;

  @media screen and ${theme.device.tablet} {
    font-size: ${theme.fontSize.small};
  }
`;

export const month = (theme: Theme) => css`
  font-size: ${theme.fontSize.lg};
  font-weight: 500;
  text-transform: capitalize;

  @media screen and ${theme.device.tablet} {
    font-size: ${theme.fontSize.subTitleSize};
  }
`;
