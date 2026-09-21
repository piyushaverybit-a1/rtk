import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../filter/userDetailSlice";

export const store = configureStore({
  reducer: {
    app:userDetail
  },
});
