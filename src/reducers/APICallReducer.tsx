import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  isError: boolean;
}

const initialState: PostState = {
  posts: [],
  status: "idle",
  isError: false,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response?.json();
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.status = "succeeded";
        state.posts = action.payload;
      }
    );

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
      state.isError = true;
    });
  },
});

export default postSlice.reducer;

export const APICallActions = postSlice.actions
