import { FC } from "react";
import Link from "next/link";

import * as S from "./Project.style";

const Project: FC = () => {
  return (
    <li css={S.project}>
      <div css={S.container}>
        <time css={S.date}>2020/12/12</time>
        <Link href="/">
          <a>
            <figure css={S.content}>
              <div css={S.thumbnail}>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  alt=""
                  width="498"
                  height="308"
                />
              </div>
              <figcaption>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Id donec ultrices tincidunt arcu.
                </p>
              </figcaption>
            </figure>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default Project;
