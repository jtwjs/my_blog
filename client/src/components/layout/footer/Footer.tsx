import { FC } from "react";

import GithubIcon from "@assets/icons/ic_github.svg";
import * as S from "./Footer.style";

const Footer: FC = () => {
  return (
    <footer css={S.wrapper}>
      <div css={S.container}>
        <span>Copyright © 2022 Woong</span>
        <a
          css={S.github}
          href="https://github.com/jtwjs"
          target="_blank"
          rel="noopener"
        >
          <GithubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
