// import { Avatar, Rate } from "antd"

import { useCallback, useState } from "react"

import { UserOutlined } from "@ant-design/icons"
import { Avatar, Pagination, Rate } from "antd"
import type { PaginationProps } from "antd"

export default function Feedback() {
    const feedbackData = [
        {
            id: 1,
            userName: "Anastasia Syutra",
            stars: 1,
            date: "30 февраля 2023",
            descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusantium fuga et sint quaerat beatae molestias earum reiciendis nulla veniam libero facere, assumenda asperiores itaque tempore ab. Saepe, placeat possimus?`,
        },
        {
            id: 2,
            userName: "Anastasia Syutra",
            stars: 2,
            date: "30 февраля 2023",
            descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusantium fuga et sint quaerat beatae molestias earum reiciendis nulla veniam libero facere, assumenda asperiores itaque tempore ab. Saepe, placeat possimus?`,
        },
        {
            id: 3,
            userName: "Anastasia Syutra",
            stars: 3,
            date: "30 февраля 2023",
            descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusantium fuga et sint quaerat beatae molestias earum reiciendis nulla veniam libero facere, assumenda asperiores itaque tempore ab. Saepe, placeat possimus?`,
        },
        {
            id: 4,
            userName: "Anastasia Syutra",
            stars: 4,
            date: "30 февраля 2023",
            descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusantium fuga et sint quaerat beatae molestias earum reiciendis nulla veniam libero facere, assumenda asperiores itaque tempore ab. Saepe, placeat possimus?`,
        },
        {
            id: 5,
            userName: "Anastasia Syutra",
            stars: 5,
            date: "30 февраля 2023",
            descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusantium fuga et sint quaerat beatae molestias earum reiciendis nulla veniam libero facere, assumenda asperiores itaque tempore ab. Saepe, placeat possimus?`,
        },
    ]
    const [currentPageFeedback, setCurrentPageFeedback] = useState(1)

    const feedbackCounter = feedbackData.length
    console.log(feedbackCounter)
    const onShowSizeChange: PaginationProps["onShowSizeChange"] = (current, pageSize) => {
        setCurrentPageFeedback(current)
        console.log("currecurrentPageFeedback", currentPageFeedback)
    }

    return (
        <div className="coworking_block">
            <div className="coworking_block__wrapper">
                <div className="coworking_block__title">Отзывы</div>
                <div className="feedback">
                    <div className="feedback__wrapper">
                        <div className="feedback__list">
                            {feedbackData.slice((currentPageFeedback - 1) * 4, currentPageFeedback * 4).map(feedbackData => {
                                return (
                                    <div className="feedback__item" key={feedbackData.id}>
                                        <div className="feedback__user">
                                            <div className="feedback__user_image">
                                                <Avatar src="../images/profile/avatar.png" size={64} icon={<UserOutlined />} />
                                            </div>
                                            <div className="feedback__user_name">{feedbackData.userName}</div>
                                        </div>
                                        <div className="feedback__raiting">
                                            <div className="feedback__stars">
                                                <Rate disabled defaultValue={feedbackData.stars} />
                                            </div>
                                            <div className="feedback__date">{feedbackData.date}</div>
                                        </div>
                                        <div className="feedback__descr">{feedbackData.descr}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <Pagination className="feedback__pagination" defaultCurrent={1} total={feedbackCounter} pageSize={4} onChange={onShowSizeChange} showSizeChanger={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}
