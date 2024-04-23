export class CoworkingService {
    static async getCoworking(id: number) {
        console.log(id)

        return {
            id: 1,
            title: "Коворкинг 1",
            images: [
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
            ],
            price: 199,
            link: "https://t.me/nikita_frl",
            rating: 4,
            metro: "м. Крестовский остров",
            address: "ул. Морской просп., 25",
            feedbackCounter: 3,
            isFavorite: true,
            conveniences: ["Безлимитный кофе", "Удобные места", "Больше окна"],
            longitude: 56.831956,
            latitude: 60.602963,
        }
    }
}
