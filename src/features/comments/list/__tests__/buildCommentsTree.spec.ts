import { buildCommentsTree } from "@/features/comments/list/lib/buildCommentsTree";
import { createComment } from "@/shared/test/util/createComment";

describe('buildCommentsTree util', () => {
  test('should return root comments when no replies exist', () => {
    const roots = buildCommentsTree([
      createComment(1),
      createComment(2)
    ]);

    expect(roots).toHaveLength(2);
    expect(roots[0].children).toHaveLength(0);
    expect(roots[1].children).toHaveLength(0);
  })

  test('should attach a reply to its parent comment', () => {
    const roots = buildCommentsTree([
      createComment(1),
      createComment(2, 1),
    ]);

    expect(roots[0].children).toHaveLength(1);
    const replies = roots[0].children;
    expect(replies[0].id).toBe(2);
  })

  test('should attach multiple replies to the same parent', () => {
    const roots = buildCommentsTree([
      createComment(1),
      createComment(2, 1),
      createComment(3, 1),
    ]);

    expect(roots).toHaveLength(1);
    const replies = roots[0].children;
    expect(replies).toHaveLength(2);
    expect(replies[0].id).toBe(2);
    expect(replies[1].id).toBe(3);
  })

  test('should build a nested comment tree', () => {
    const roots = buildCommentsTree([
      createComment(1),
      createComment(2, 1),
      createComment(3, 2),
    ]);

    const root = roots[0]
    const reply = root.children[0]
    const nestedReply = reply.children[0]

    expect(root.id).toBe(1)
    expect(reply.id).toBe(2);
    expect(nestedReply.id).toBe(3);
    expect(root.children).toHaveLength(1);
    expect(reply.children).toHaveLength(1);
  })

  test('should build multiple root comment trees', () => {
    const roots = buildCommentsTree([
      createComment(1),
      createComment(2, 1),
      createComment(3),
      createComment(4, 3),
    ]);

    expect(roots).toHaveLength(2);
    expect(roots[0].children).toHaveLength(1);
    expect(roots[1].children).toHaveLength(1);
    expect(roots[0].id).toBe(1);
    expect(roots[1].id).toBe(3);
    expect(roots[0].children[0].id).toBe(2);
    expect(roots[1].children[0].id).toBe(4);
  })

  test('should return an empty array when no comments are provided', () => {
    const roots = buildCommentsTree([])
    expect(roots).toHaveLength(0);
  })

  test('should ignore comment with non-existent parent', () => {
    const roots = buildCommentsTree([
      createComment(1),
      createComment(2, 100),
    ]);

    expect(roots).toHaveLength(1);
    expect(roots[0].id).toBe(1);
    expect(roots[0].children).toHaveLength(0);
  })
})