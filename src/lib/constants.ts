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