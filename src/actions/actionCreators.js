export const increment = (idx) => {
  return {
    type: 'INCREMENT_LIKES',
    idx
  };
}

export const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

export const removeComment = (postId, idx) => {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    idx
  };
}
