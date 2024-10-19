import {VideosPlaceholder} from "$lib/placeholder/videoPlaceholder";
import {error} from "@sveltejs/kit";

export async function load({params}) {
    const video = VideosPlaceholder.find(v => v.id == params.video_id)

    if(!video) throw error(404);

    return {
        video: video
    }
}