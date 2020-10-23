const defaultMiddleware = (store) => (next) => (action) => {
  // console.log('Je laisse passer cette action: ', action.type);
  next(action);
};

export default defaultMiddleware;
