import { writable } from 'svelte/store';

// game theme, dark = true
export const dark = writable(null);

// game state, start = 0, play = 1, or end = 2
export const state = writable(0);

// players measures
export const input = writable({});

// covid situation/history
export const covid = writable({});
