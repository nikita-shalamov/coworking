import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface SocialMediaProps {
    links: {
        vk: string,
        tg: string,
    };
}

export default function SocialMedia({ links }: SocialMediaProps) {
    return (
        <div className="social_media">
            <a href={links.vk}>
                <FontAwesomeIcon icon={faVk} style={{ color: "#0091ff" }} className="social_media__link" />
            </a>
            <a href={links.tg}>
                <FontAwesomeIcon icon={faTelegram} style={{ color: "#0e9ed6" }} className="social_media__link social_media__link_tg" />
            </a>
        </div>
    )
}
