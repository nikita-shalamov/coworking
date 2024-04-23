// import { Avatar, Rate } from "antd"

import { UserOutlined } from "@ant-design/icons"
import { Avatar, Rate } from "antd"

export default function Feedback() {
    return (
        <div className="coworking_block">
            <div className="coworking_block__wrapper">
                <div className="coworking_block__title">Отзывы</div>
                <div className="feedback">
                    <div className="feedback__wrapper">
                        <div className="feedback__list">
                            <div className="feedback__item">
                                <div className="feedback__user">
                                    <div className="feedback__user_image">
                                        <Avatar src="../images/profile/avatar.png" size={64} icon={<UserOutlined />} />
                                    </div>
                                    <div className="feedback__user_name">Anastasia Syutra</div>
                                </div>
                                <div className="feedback__raiting">
                                    <div className="feedback__stars">
                                        <Rate disabled defaultValue={4} />
                                    </div>
                                    <div className="feedback__date">30 февраля 2023</div>
                                </div>
                                <div className="feedback__descr">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusantium fuga et sint quaerat beatae molestias earum reiciendis nulla veniam libero facere,
                                    assumenda asperiores itaque tempore ab. Saepe, placeat possimus?
                                </div>
                            </div>
                        </div>
                        <div className="feedback__more"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
