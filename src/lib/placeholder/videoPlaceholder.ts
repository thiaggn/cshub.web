import type {Video} from "$lib/types";

export const VideosPlaceholder: Video[] = [
    {
        id: "a1B2C",
        progress: 330,
        title: "História da Arquitetura de Computadores",
        moduleTitle: "Arquitetura de Computadores",
        tag: 'A',
        length: 86,
        next: {
            id: "D3e4F",
            title: "Componentes Básicos",
            length: 1080,
        },

        parts: [
            {title: "Alan Turing", start: 0, end: 27, id: 'sidfj'},
            {title: "Arquitetura de Von Neumann", start: 27, end: 35, id: '23492'},
            {title: "Os primeiros computadores", start: 35, end: 49, id: 'isfdj'},
            {title: "Computadores hoje em dia", start: 49, end: 86, id: 'wed9i'},
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
            {title: "Visão Geral", start: 0, end: 180, id: 'oqire'},
            {title: "Processador", start: 181, end: 400, id: '9eiwd'},
            {title: "Memória RAM", start: 401, end: 720, id: 'osdfj'},
            {title: "Dispositivos de Armazenamento", start: 721, end: 1080, id:'ofdsf'}
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
            {title: "Entrada e Saída", start: 0, end: 200, id: 'okdfs'},
            {title: "Processamento de Dados", start: 201, end: 480, id: 'odsap'},
            {title: "Unidade de Controle", start: 481, end: 720, id: 'kfs00'},
            {title: "Ciclo de Instrução", start: 721, end: 960, id:'odsfp'}
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
            {title: "Arquitetura CISC", start: 0, end: 300, id: 'sdfs0'},
            {title: "Arquitetura RISC", start: 301, end: 600, id: 'esddf'},
            {title: "Arquitetura EPIC", start: 601, end: 900, id: '0sdf3'},
            {title: "Comparação entre Arquiteturas", start: 901, end: 1260, id: 'kmod3'}
        ]
    },
    {
        id: "M9n0O",
        title: "Arquitetura Von Neumann",
        length: 1320,
        moduleTitle: "Arquitetura de Computadores",
        tag: 'E',
        parts: [
            {title: "Introdução à Arquitetura Von Neumann", start: 0, end: 240, id: 'Yeld0'},
            {title: "Características Principais", start: 241, end: 600, id: 'oroR3'},
            {title: "Ciclo de Execução", start: 601, end: 960, id: 'Ssdf4'},
            {title: "Vantagens e Limitações", start: 961, end: 1320, id: 'pare4'}
        ]
    }
]
