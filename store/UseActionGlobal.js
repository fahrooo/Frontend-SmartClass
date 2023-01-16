import { create } from "zustand";

const useActionGlobal = create(
  (set) => {
    return {
      infoStatus: "tahap1",
      updateInfoStatus: (infoStatus) => set(() => ({ infoStatus: infoStatus })),
      email: "",
      updateEmail: (email) => set(() => ({ email: email })),
    };
  },
  { name: "accept" }
);

export default useActionGlobal;
