import React from "react";
import { toast } from "react-toastify";

export const EnhancedToastify = (status, message) => {
  const getMessage = <p>{message}</p>;

  if (status === "info") return toast.info(getMessage);
  if (status === "warning") return toast.warning(getMessage);
  if (status === "success") return toast.success(getMessage);
  if (status === "error") return toast.error(getMessage);

  return toast.warning(getMessage);
};
