import { NextPageWithLayout } from "@/types";
import { useCounterSlice } from "@/hooks/useCounterSlice";
import React from "react";
const HomePage: NextPageWithLayout = () => {
  const { increment, decrement, count } = useCounterSlice();
  return (
    //test
    <div>
      <span>ForgeBox</span>
      <h1>Counter</h1>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default HomePage;
