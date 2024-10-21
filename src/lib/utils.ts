export function formatTime(s: number) {
    const min = Math.trunc(s / 60);
    const s_remain = Math.trunc(s % 60);

    if(isNaN(min) || isNaN(s_remain)) {
        return "00:00"
    }

    return `${String(min).padStart(2, '0')}:${String(s_remain).padStart(2, '0')}`;
}