import { toast } from "react-toastify";

type ToastType = "error" | "success" | "warning";

export const Notify = (toastType: ToastType, message: string) => {
  toast[toastType](message);
};
