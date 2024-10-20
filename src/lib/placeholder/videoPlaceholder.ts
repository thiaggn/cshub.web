import type {Video} from "$lib/types";

export const VideosPlaceholder: Video[] = [
    {
        id: "a1B2C",
        title: "História da Arquitetura de Computadores",
        moduleTitle: "Arquitetura de Computadores",
        tag: 'A',
        length: 900,
        next: {
            id: "D3e4F",
            title: "Componentes Básicos",
            length: 1080,
        },

        parts: [
            {title: "Introdução", start: 0, end: 120},
            {title: "Primeiros Computadores", start: 121, end: 300},
            {title: "Evolução da Arquitetura", start: 301, end: 600},
            {title: "Arquitetura Moderna", start: 601, end: 900},
        ]
    },
    {
        id: "D3e4F",
        title: "Componentes Básicos",
        length: 1080,
        moduleTitle: "Arquitetura de Computadores",
        tag: 'B',
        next: {
            id: "G5h6I",
            title: "Funcionamento Geral de um Computador",
            length: 960,
        },

        parts: [
            {title: "Visão Geral", start: 0, end: 180},
            {title: "Processador", start: 181, end: 400},
            {title: "Memória RAM", start: 401, end: 720},
            {title: "Dispositivos de Armazenamento", start: 721, end: 1080}
        ]
    },
    {
        id: "G5h6I",
        title: "Funcionamento Geral de um Computador",
        length: 960,
        moduleTitle: "Arquitetura de Computadores",
        tag: 'C',
        next: {
            id: "j7K8L",
            title: "Tipos de Arquitetura",
            length: 1260,
        },

        parts: [
            {title: "Entrada e Saída", start: 0, end: 200},
            {title: "Processamento de Dados", start: 201, end: 480},
            {title: "Unidade de Controle", start: 481, end: 720},
            {title: "Ciclo de Instrução", start: 721, end: 960}
        ]
    },
    {
        id: "j7K8L",
        title: "Tipos de Arquitetura",
        length: 1260,
        moduleTitle: "Arquitetura de Computadores",
        tag: 'D',

        next: {
            id: "M9n0O",
            title: "Arquitetura Von Neumann",
            length: 1320,
        },

        parts: [
            {title: "Arquitetura CISC", start: 0, end: 300},
            {title: "Arquitetura RISC", start: 301, end: 600},
            {title: "Arquitetura EPIC", start: 601, end: 900},
            {title: "Comparação entre Arquiteturas", start: 901, end: 1260}
        ]
    },
    {
        id: "M9n0O",
        title: "Arquitetura Von Neumann",
        length: 1320,
        moduleTitle: "Arquitetura de Computadores",
        tag: 'E',
        parts: [
            {title: "Introdução à Arquitetura Von Neumann", start: 0, end: 240},
            {title: "Características Principais", start: 241, end: 600},
            {title: "Ciclo de Execução", start: 601, end: 960},
            {title: "Vantagens e Limitações", start: 961, end: 1320}
        ]
    }
]
