import { FC, forwardRef, Ref } from "react";

import { IPostCard } from "@type/blog";
import * as S from "./PostCard.style";

type PostCardProps = Omit<IPostCard, "id"> & { ref: Ref<HTMLDivElement> };
const PostCard: FC<PostCardProps> = forwardRef(
  ({ thumbnail, createAt, title, desc }, ref: Ref<HTMLDivElement>) => {
    return (
      <article css={S.post} ref={ref}>
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
  }
);

export default PostCard;
