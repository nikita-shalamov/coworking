export class CoworkingService {
    static async getCoworking(id: number) {
        console.log(id)

        return {
            id: 1,
            title: "Коворкинг 1",
            description: "Описание",
            price: 199, //
            rating: 4,
            longitude: 56.831956,
            latitude: 60.602963,
            site: "#",
            address: "ул. Морской просп., 25",
            isFavorite: true,
            images: [
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
                "../images/coworkings/image.png",
            ],
            city: "Пермь", //
            metro: "м. Крестовский остров", //
            feedbackCounter: 3, //
            conveniences: ["Безлимитный кофе", "Удобные места", "Больше окна"], //
            contacts: [
                {
                    type: "email",
                    name: "Галина Сергеевна",
                    value: "example@mail.ru",
                },
            ],
        }
    }
}
