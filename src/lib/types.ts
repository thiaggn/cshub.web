// place files you want to import through the `$lib` alias in this folder.

export type Part = {
    title: string;
    start: number;
    end: number;
}

export type Video = {
    id: string;
    length: number;
    title: string
    tag: string;
    moduleTitle: string;
    parts: Part[];
}

export type Chapter = {
    id: string
    title: string
    videos: {
        id: string;
        length: number;
        title: string
        tag: string;
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



