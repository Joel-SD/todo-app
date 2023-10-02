import { TodoType } from "@/types/todo.type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  todos: TodoType[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

// middleware setup for todos with local storage
const initialState: TodoState = {
  todos: (() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else return [];
  })(),
  loading: "idle",
};

//async thunk for fetching todos
export const getTodosData = createAsyncThunk("data/fetch", async () => {
  const response = await fetch("https://dummyjson.com/todos");
  const data = await response.json();
  return data.todos;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getTodosData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.todos = action.payload;
      })
      .addCase(getTodosData.rejected, (state) => {
        state.loading = "failed";
      });
  },
});
export const { setTodos } = todoSlice.actions;

export default todoSlice.reducer;
