export class ProfileData {
    static async getProfile(id: number) {
        console.log(id)

        return {
            id: 1,
            profilePhoto: "../images/profile/avatar.png",
            userName: "George",
        }
    }
}
