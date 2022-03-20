import { css, Theme } from "@emotion/react";

type dateProps = {
  isSelectedDate: boolean;
};

export const wrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0;
  padding-bottom: 100%;
  background-color: ${theme.color.bg_primary};
`;

export const date = (theme: Theme, { isSelectedDate }: dateProps) => css`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &[disabled] {
    & > span {
      color: ${theme.color.disabled};
    }
  }

  & > span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    color: ${isSelectedDate
      ? theme.color.text_reflection
      : theme.color.text_reverseReflection};
    font-weight: ${isSelectedDate ? 600 : 400};
  }

  &:not([disabled]) > span {
    background-color: ${isSelectedDate === true && theme.color.primary};
  }

  @media screen and ${theme.device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.8rem;

    & > span {
      width: 2.8rem;
      height: 2.8rem;
      font-size: ${theme.fontSize.base};
    }
  }
`;
