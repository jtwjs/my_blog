import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  border-radius: 1.5rem;
  padding: 2.8rem 1rem 0.6rem;
  background-color: ${theme.color.bg_primary};
  box-shadow: ${theme.boxShadow.secondary};
  transform: translateY(-2.5rem);
`;

export const week = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  margin-bottom: 0.6rem;
  color: ${theme.color.text_reverseReflection};

  & > li {
    font-size: ${theme.fontSize.small};
    text-transform: capitalize;

    &:first-of-type {
      color: ${theme.color.calendar_sun};
    }

    &:last-of-type {
      color: ${theme.color.calendar_sat};
    }
  }

  @media screen and ${theme.device.tablet} {
    margin-bottom: 1.2rem;

    & > li {
      padding: 0 0.8rem;
      text-align: start;
    }
  }
`;

export const dateList = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  @media screen and ${theme.device.tablet} {
    grid-gap: 1px;
    border-top: 1px solid ${theme.color.border};
    border-bottom: 1px solid ${theme.color.border};
    background-color: ${theme.color.border};
  }
`;
