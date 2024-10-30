import { decrement, increment } from "@/store/counterReducer";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export const useCounterSlice = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
