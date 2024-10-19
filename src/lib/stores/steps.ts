import {goto} from "$app/navigation";
import {writable, type Readable} from "svelte/store";
import {page} from "$app/stores";


export type Destination = {
    label: string;
    icon: string;
    to: string;
}

export const destinations: Destination[] = [
    {
        label: "Módulos",
        icon: "grid_view",
        to: "/learn"
    }, {
        label: "Revisar",
        icon: "neurology",
        to: "/review"
    }, {
        label: "Histórico",
        icon: "history",
        to: "/history"
    }
]

let history: string[] = [];

const stepStore = writable(0);

export const trajectory = {

    push: function (url: string) {
        history.push(url);
        stepStore.set(history.length);
    },

    back: function () {
        const last = history.pop();
        stepStore.set(history.length);
        if (last) {
            goto(last);
        }
    },

    clear: function () {
        history = [];
        stepStore.set(0);
    }
};


export const steps = stepStore as Readable<number>;

