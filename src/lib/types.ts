// place files you want to import through the `$lib` alias in this folder.

export type Part = {
    id: string;
    title: string;
    start: number;
    end: number;
}

export type Video = {
    id: string;
    length: number;
    title: string
    tag: string;
    progress?: number;
    moduleTitle: string;
    parts: Part[];
    next?: {
        id: string;
        title: string;
        length: number;
    }
}

export type Chapter = {
    id: string
    title: string
    videos: {
        id: string;
        length: number;
        title: string
        tag: string;
        progress?: number;
    }[]
}

export type Module = {
    id: string
    title: string
    icon: string
    chapters: {
        id: string;
        title: string;
    }[]
}

export type Category = {
    title: string
    modules: {
        icon: string
        id: string
        title: string
        startChapter: string
    }[]
}



