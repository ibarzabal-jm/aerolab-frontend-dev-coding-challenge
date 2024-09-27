"use client";

import { createContext } from "react";

export type ToastType = "success" | "error";

export interface ToastData {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
}

export type ToastPayload = Omit<ToastData, "id">;

interface ToastContextType {
  showToast: (toast: ToastPayload) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);
