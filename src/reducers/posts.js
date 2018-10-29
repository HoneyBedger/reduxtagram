const posts  = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.idx;
      return [
        ...state.slice(0, i), //posts before the one we're changing
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) //posts after the one we're changing
      ];
    default:
      return state;
  }
};

export default posts;
