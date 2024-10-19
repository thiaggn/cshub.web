
import {error} from "@sveltejs/kit";
import type {Chapter} from "$lib/types";
import {ChapterPlaceholders} from "$lib/placeholder/chapterPlaceholders";
import {ModulePlaceholder} from "$lib/placeholder/modulePlaceholder";

export async function load({params}) {
    // temporário: o módulo tem que ser arquitetura de computadores
    if(params.module_id != "X3tL9") throw error(404);

    let chapter = ChapterPlaceholders.find(function (c: Chapter) {
        return c.id == params.chapter_id;
    })

    if(chapter == undefined) throw error(404);

    return {
        module: ModulePlaceholder,
        chapter: chapter
    }
}