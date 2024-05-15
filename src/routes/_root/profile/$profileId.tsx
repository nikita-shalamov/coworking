import { ProfileData } from "@/services/ProfileData"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_root/profile/$profileId")({
    loader: ({ params: { profileId } }) => ProfileData.getProfile(Number(profileId)),
    component: () => <Page />,
})

const Page = () => {
    const data = Route.useLoaderData()

    return <div className="profile__wrapper"></div>
}
