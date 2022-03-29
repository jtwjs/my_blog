import type { NextPage } from "next";
import Link from "next/link";

import { featureItems } from "@assets/static/home";
import * as S from "./home.style";

const HomePage: NextPage = () => {
  return (
    <>
      <div css={S.home}>
        <figure css={S.fallback}>
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            alt=""
          />
        </figure>
        <h2 css={S.title}>FE developer</h2>
        <p css={S.subTitle}>Daily BLOG</p>
        <Link href="/blog">
          <a css={S.linkBtn}>Get Started →</a>
        </Link>
      </div>
      <div css={S.feature}>
        {featureItems.map(({ title, desc }) => (
          <dl key={title} css={S.featureItem}>
            <dt>{title}</dt>
            <dd>{desc}</dd>
          </dl>
        ))}
      </div>
    </>
  );
};

export default HomePage;
