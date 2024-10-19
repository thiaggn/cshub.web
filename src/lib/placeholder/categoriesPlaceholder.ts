import type {Category} from "$lib/types";
import {ChapterPlaceholders} from "$lib/placeholder/chapterPlaceholders";

export const CategoriesPlaceholder: Category[] = [
    {
        title: "Matemática",
        modules: [
            {title: "Cálculo 1", icon: "blur_circular", id: "a2Fj3", startChapter: ""},
            {title: "Cálculo 2", icon: "blur_circular", id: "X9nJ7", startChapter: ""},
            {title: "Cálculo 3", icon: "blur_circular", id: "kR5p8", startChapter: ""},
            {title: "Equações diferenciais", icon: "blur_circular", id: "T6lY9", startChapter: ""},
            {title: "Geometria analítica", icon: "shape_line", id: "J1qB8", startChapter: ""},
            {title: "Álgebra linear", icon: "shape_line", id: "Z5pN7", startChapter: ""},
            {title: "Probabilidade", icon: "bar_chart", id: "U4mW9", startChapter: ""},
            {title: "Matemática discreta", icon: "data_object", id: "Y7bR5", startChapter: ""},
            {title: "Algoritmos numéricos", icon: "data_array", id: "V2xL6", startChapter: ""}
        ]
    },

    {
        title: "Computação",
        modules: [
            {title: "Estrutura de dados", icon: "account_tree", id: "W9qJ3", startChapter: ""},
            {title: "Programação estruturada", icon: "code", id: "M5rK2", startChapter: ""},
            {title: "Programação funcional", icon: "code", id: "Q6vT1", startChapter: ""},
            {title: "Programação orientada a objetos", icon: "code", id: "P8kL4", startChapter: ""},
            {title: "Programação orientada a dados", icon: "code", id: "R7nB2", startChapter: ""},
            {
                title: "Arquitetura de Computadores",
                icon: "memory",
                id: "X3tL9",
                startChapter: ChapterPlaceholders[0].id
            },
            {title: "Compiladores", icon: "code_blocks", id: "N2rK5", startChapter: ""},
            {title: "Sistemas operacionais", icon: "settings", id: "H4tW8", startChapter: ""}
        ]
    }
];