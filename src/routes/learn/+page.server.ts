import {CategoriesPlaceholder} from "$lib/placeholder/categoriesPlaceholder";
import type {Category} from "$lib/types";

export async function load(): Promise<{summaries: Category[]}> {
    return {
        summaries: CategoriesPlaceholder
    }
}