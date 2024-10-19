import {writable} from "svelte/store";

type SidebarState = {
    expanded: boolean
    forceMinimize: boolean
}

export const sidebar = writable<SidebarState>({
    expanded: true,
    forceMinimize: false,
})

