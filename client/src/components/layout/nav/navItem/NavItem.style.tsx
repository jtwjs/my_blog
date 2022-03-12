import { css, Theme } from "@emotion/react";

export const wrapper = css`
  height: 100%;

  &:not(:last-of-type) {
    margin-right: 1.6rem;
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
  color: ${isActive ? theme.color.primary : theme.color.text_base};
  transition: 0.2s all ease-in-out;

  &&:hover {
    color: ${theme.color.text_base};
  }

  & > span {
    font-size: ${theme.fontSize.small};
    text-transform: capitalize;
  }
`;
