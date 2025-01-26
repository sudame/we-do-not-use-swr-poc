import { Suspense } from "react";
import { Post } from "./Post";

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Post postId={1} />
    </Suspense>
  );
}
