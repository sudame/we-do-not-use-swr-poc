import { use } from "react";
import { getPost } from "./api";

interface Props {
  postId: number;
}

export function Post(props: Props) {
  const { postId } = props;

  const post = use(getPost({ postId }));

  return <pre>{JSON.stringify(post, null, 4)}</pre>;
}
