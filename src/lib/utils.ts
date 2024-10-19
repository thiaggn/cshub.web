export function formatTime(s: number) {
    const min = Math.floor(s / 60);
    const s_remain = s % 60;
    return `${String(min).padStart(2, '0')}:${String(s_remain).padStart(2, '0')}`;
}