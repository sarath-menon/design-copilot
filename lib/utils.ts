import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function blockingWait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function pi(n: number) {
  let v = 0;
  for (let i = 1; i <= n; i += 4) {
    // increment by 4
    v += 1 / i - 1 / (i + 2); // add the value of the series
  }
  return 4 * v; // apply the factor at last
}
