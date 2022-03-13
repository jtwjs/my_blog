import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  height: 100%;

  &&:hover {
    & > a > span {
      color: ${theme.color.text_base};
    }
  }

  &:not(:last-of-type) {
    padding-right: 1.6rem;
  }
`;

type linkProps = {
  isActive: boolean;
};

export const link = (theme: Theme, { isActive = false }: linkProps) => css`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0.4rem;
  transition: 0.2s all ease-in-out;

  & > span {
    font-size: ${theme.fontSize.small};
    color: ${isActive ? theme.color.primary : theme.color.text_base};
    text-transform: capitalize;
  }
`;
