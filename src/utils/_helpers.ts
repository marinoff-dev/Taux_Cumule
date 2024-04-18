import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { LS_TOKEN_KEY } from "./_constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAccessToken() {
  let tokens = localStorage.getItem(LS_TOKEN_KEY)
  if(tokens) {
    return JSON.parse(tokens)?.access_token
  }
  return null
}