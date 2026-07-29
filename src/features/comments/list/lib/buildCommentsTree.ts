import { CommentNode } from "@/entities/comment/model/types";
import { CommentTreeNode } from "@/features/comments/list/model/types";

export function buildCommentsTree(flatList: CommentNode[]) {
  const hashMap = new Map<number, CommentTreeNode>()
  const roots: CommentTreeNode[] = []

  for (const node of flatList) {
    hashMap.set(node.id, {...node, children: []});
  }

  for (const node of flatList) {
    const currentNode = hashMap.get(node.id)!;

    if (currentNode.parentId === null) {
      roots.push(currentNode);
    } else {
      const parent = hashMap.get(currentNode.parentId);
      parent?.children?.push(currentNode);
    }
  }

  return roots;
}