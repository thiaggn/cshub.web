import {writable} from "svelte/store";
import type {Part} from "$lib/types";

export type PlayerState = {
    time: number;
    part: Part;
}

const defaultState: PlayerState = {
    time: 0,
    part: {
        title: "",
        start: 0,
        end: 0,
        id: ""
    }
}

export const player = writable<PlayerState>(defaultState);