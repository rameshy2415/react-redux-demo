import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  isNotification: false,
  notification: { status: "", message: "", title: "" },
  indexArray: [0],
  currentIndex: 0
};

export const uiNotificationSlice = createSlice({
  name: "uiNotofication",
  initialState: initial_state,
  reducers: {
    showNotification: (state, action) => {
      state.isNotification = action.payload.isNotification
      state.notification.status = action.payload.status;
      state.notification.message = action.payload.message;
      state.notification.title = action.payload.title;
    },

    closeNotification: (state, action) => {
      state.isNotification = false
      state.notification.status = action.payload.status;
      state.notification.message = action.payload.message;
      state.notification.title = action.payload.title;
    },

    updateIndexAndArray: (state, action)=>{
      state.indexArray = action.payload.indexArray;
      state.currentIndex = action.payload.currentIndex;
    }
  },
});
