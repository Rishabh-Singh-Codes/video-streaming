import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
    clearMessages: (state) => {
      state.messages.length = 0;
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
