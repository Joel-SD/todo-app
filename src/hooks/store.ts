import type { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

//typescript aproach
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

//js aproach
// export const useAppSelector = useSelector;
// export const useAppDispatch = useDispatch;
