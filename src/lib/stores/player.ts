import {writable} from "svelte/store";
import type {Part} from "$lib/types";

export type PlayerState = {
    time: number;
    parts:  {
        info: Part;
        watched: number;
    }[]
}

const defaultState: PlayerState = {
    time: 0,
    parts: [{
        info: {
            id: "",
            title: "",
            start: 0,
            end: 0,
        },

        watched: 0
    }]
}

export const player = writable<PlayerState>(defaultState);