import { ToastOptions, toast } from "react-toastify";

type ToastType = "error" | "success" | "warning";

export const Notify = (
  toastType: ToastType,
  message: string,
  options?: ToastOptions
) => {
  toast[toastType](message, options);
};
