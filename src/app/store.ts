import {
  configureStore, ThunkAction, Action, combineReducers,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';
import authorReducer from '../features/author/authorSlice';
import userPostsReducer from '../features/posts/userPostsSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     users: usersReducer,
//     author: authorReducer,
//   },
// });

const reducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  author: authorReducer,
  userPosts: userPostsReducer,
});

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
