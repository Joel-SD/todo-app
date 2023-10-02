import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice/todoSlice";

// Persist state in local storage
const saveTodosToLocalStorage = (store) => (next) => (action) => {
  next(action);
  const state = store.getState();
  localStorage.setItem("todos", JSON.stringify(state.todosSlice.todos));
};

export const store = configureStore({
  reducer: {
    todosSlice: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveTodosToLocalStorage),
});

// Fixing typo error of state
export type RootState = ReturnType<typeof store.getState>;
// Type of dispatch
export type AppDispatch = typeof store.dispatch;
