import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/utils/api";

export interface Post {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

interface PostsState {
  list: Post[];
  filter: string;
  loading: boolean;
}

const initialState: PostsState = {
  list: [],
  filter: "",
  loading: false,
};

export const fetchPosts = createAsyncThunk<Post[]>("posts/fetch", async () => {
  const res = await api.get("/posts");
  return res.data;
});

export const createPost = createAsyncThunk<Post, { name: string; description: string }>(
  "posts/create",
  async (data) => {
    const res = await api.post("/posts", data);
    return res.data;
  }
);

export const deletePost = createAsyncThunk<number, number>("posts/delete", async (id) => {
  await api.delete(`/posts/${id}`);
  return id;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.list = state.list.filter((p) => p.id !== action.payload);
      });
  },
});

export const { setFilter } = postsSlice.actions;
export default postsSlice.reducer;
