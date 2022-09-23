import { writable } from "svelte/store";
import { getJsonCookie, type CartType } from "./cookies";

export const cartStore = writable<CartType[]>(getJsonCookie("cart") || []);