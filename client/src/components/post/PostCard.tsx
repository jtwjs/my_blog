import { FC } from "react";

import { IPostCard } from "@type/blog";
import * as S from "./PostCard.style";

type PostCardProps = Omit<IPostCard, "id">;
const PostCard: FC<PostCardProps> = ({ thumbnail, createAt, title, desc }) => {
  return (
    <article css={S.post}>
      <figure css={S.thumbnail}>
        <img src={thumbnail} alt="" />
      </figure>
      <div css={S.description}>
        <time>{createAt}</time>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default PostCard;
