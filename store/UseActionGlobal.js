import { create } from "zustand";

const useActionGlobal = create(
  (set) => {
    return {
      email: "",
      updateEmail: (email) => set(() => ({ email: email })),
    };
  },
  { name: "accept" }
);

export default useActionGlobal;
