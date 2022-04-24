import { css, Theme } from "@emotion/react";

export const wrapper = (theme: Theme) => css`
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;

  & > svg {
    width: 100%;
    height: 100%;
    fill: ${theme.color.text_reflection};
    transition: all 400ms ease;
    pointer-events: none;
  }

  &[disabled] {
    & > svg {
      fill: ${theme.color.disabled};
    }
  }

  @media screen and ${theme.device.tablet} {
    &:hover {
      & > svg {
        transform: scale(1.2);
      }
    }
  }
`;
