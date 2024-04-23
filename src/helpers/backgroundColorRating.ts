export const backgroundColorRating = (rating: number) => {
    if (rating <= 4 && rating >= 3) {
        return "#faad14"
    }
    if (rating > 4) {
        return "#52c41a"
    } else {
        return "#f5222d"
    }
}
