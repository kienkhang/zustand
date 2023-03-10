import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

const useZustand = <T>(storeName: string, fn: StateCreator<T>) => {
  return create(
    devtools(fn, {
      store: `${storeName}__${fn.name}`,
      name: `${storeName}__${fn.name}`,
    })
  );
};

export default useZustand;
