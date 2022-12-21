import { writable } from 'svelte/store';

const fields: boolean[] = [];

export const isNavActive = writable(false);
export const dropdowns = writable(fields);
