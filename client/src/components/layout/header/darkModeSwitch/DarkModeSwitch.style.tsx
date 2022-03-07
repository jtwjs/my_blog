import { css } from "@emotion/react";

export const planet = css`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  /* background: radial-gradient(3.75em, 99%, transparent 100%); */
  background-color: #f2c94c;
  background-repeat: no-repeat;
  will-change: background;
  backface-visibility: hidden;
  overflow: hidden;
  transform: translate3d(1.5px, 0.5px, 0);
  transition: all 400ms ease;

  &::after {
    content: "";
    width: 2rem;
    height: 2rem;
    position: absolute;
    border-radius: 50%;
    will-change: opacity, transform, background-color;
    background-color: #828894;
    opacity: 0;
    transform: translate(2em, -2em);
    transition: opacity 400ms ease, transform 400ms ease,
      background-color 400ms ease;
  }
`;

export const elements = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 400ms ease;

  svg {
    position: absolute;
    width: 7px;
    height: 7px;
    opacity: 1;
    transition: transform 400ms ease, opacity 200ms ease, width 200ms ease,
      height 200ms ease;

    circle {
      fill: #f2c94c;
      transition: fill 400ms ease;
    }

    &:first-child {
      transform: translate(1.8em, 0.35em);
    }
    &:nth-child(2) {
      transform: translate(2.8em, 0.7em);
    }
    &:nth-child(3) {
      transform: translate(3.2em, 1.8em);
    }
    &:nth-child(4) {
      transform: translate(2.8em, 2.8em);
    }
    &:nth-child(5) {
      transform: translate(1.8em, 3.2em);
    }
    &:nth-child(6) {
      transform: translate(0.7em, 2.8em);
    }
    &:nth-child(7) {
      transform: translate(0.35em, 1.8em);
    }
    &:nth-child(8) {
      transform: translate(0.7em, 0.7em);
    }
  }
`;

export const wrapper = css`
  position: relative;
  padding: 1rem;
  transform: scale(0.75);
  cursor: pointer;

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
  }

  input:checked {
    &+div:first-of-type {
    background-color: #D7D7D8;

      &::after {
        opacity: 1;
        transform: translate(-0.6em, +0.4em);
      }
    }

    &~div {
    transform: rotate(180deg);

    svg {
      &:first-child {
        opacity: 0;
        transform: translate(2em, 1em);
      }
      &:nth-child(2) {
        opacity: 0;
        transform: translate(3em, 1.5em);
      }
      &:nth-child(3) {
        opacity: 0;
        transform: translate(3em, 2em);
      }
      &:nth-child(4) {
        opacity: 0;
        transform: translate(3em, 2em);
       }
      &:nth-child(5) {
        width: 0.3em;
        height: 0.3em;
        transform: translate(1.9em, 2.6em);

        circle {
          fill: #D7D7D820;
        }
      }
      &:nth-child(6) {
        width: 0.3em;
        height: 0.3em;
        transform: translate(1.4em, 2.5em);

        circle {
          fill: #D7D7D820;
        }
      }
      &:nth-child(7) {
        width: 0.7em;
        height: 0.7em;
        transform: translate(1.1em, 1.6em);

        circle {
          fill: #D7D7D820;
        }
      }
      &:nth-child(8) {
        width: 0.45em;
        height: 0.45em;
        transform: translate(1.7em, 2.1em);

        circle {
          fill: #D7D7D820;
        }
      }
    }
  }
`;
