import { Stack, useLocalSearchParams } from "expo-router";
import PostDetails from "@/features/post-details/ui/PostDetails";

export default function PostView() {
  const { id } = useLocalSearchParams();

  return <PostDetails id={Number(id)} />
}