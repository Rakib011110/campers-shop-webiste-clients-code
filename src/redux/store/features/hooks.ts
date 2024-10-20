import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { store } from "../store"; // Import from your store file
import { AppDispatch } from "../store";

// Correctly defining RootState as the return type of store.getState
export type RootState = ReturnType<typeof store.getState>;

// Custom hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
