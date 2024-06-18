import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function currencyFormatter(value: number) {
  return Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(value);
}

export function percentFormatter(value: number) {
  return Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "percent",
    maximumSignificantDigits: 3,
  }).format(value);
}
