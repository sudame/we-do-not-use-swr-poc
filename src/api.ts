import { memoize } from "./memoize";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface GetPostArgs {
  postId: number;
}

export async function forceGetPost(args: GetPostArgs): Promise<Post> {
  const { postId } = args;
  // わかりやすいようにわざと遅延させる
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return response.json();
}

export const getPost = memoize(forceGetPost);
