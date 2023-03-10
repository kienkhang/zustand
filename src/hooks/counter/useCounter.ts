import { StateCreator } from "zustand";
import { NamedSet } from "zustand/esm/middleware";
import useZustand from "../useZustand";

interface ICounter {
  count: number;
  increment: (num: number) => void;
  decrement: (num: number) => void;
}

const useCounter: StateCreator<ICounter> = (set: NamedSet<ICounter>, get) => {
  return {
    count: 0,
    increment: (value: number) =>
      set((state) => ({ count: state.count + value }), false, "increment"),
    decrement: (value: number) =>
      set((state) => ({ count: get().count - value }), false, "decrement"),
  };
};

export default useZustand("counter", useCounter);
