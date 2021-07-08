import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../Features/CarSlice";
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
