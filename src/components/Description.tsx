import { Descriptions } from "antd"
import type { DescriptionsProps } from "antd"

export default function Description() {
    const data = {
        id: 1,
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta consequuntur minima placeat nobis, vitae commodi, a praesentium omnis quaerat tempore odit assumenda voluptates quis minus. Excepturi, ipsum? Tempore, ab aliquid?",
    }
    const items: DescriptionsProps["items"] = [
        {
            key: "1",
            label: "Адрес",
            children: <p>Zhou Maomao</p>,
        },
        {
            key: "2",
            label: "Телефон",
            children: <p>1810000000</p>,
        },
        {
            key: "3",
            label: "Почта",
            children: <p>example@gmail.com</p>,
        },
        {
            key: "4",
            label: "Адрес",
            children: <p>ул. Морской просп., 25</p>,
        },
    ]

    return (
        <div className="coworking_block">
            <div className="coworking_block__wrapper">
                <div className="coworking_block__title">Отзывы</div>
                <div className="descr">
                    <div className="descr__wrapper">
                        <Descriptions title="User Info">
                            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                            <Descriptions.Item label="Remark">empty</Descriptions.Item>
                            <Descriptions.Item label="Address">No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Descriptions.Item>
                        </Descriptions>
                        <p className="descr__text">{data.descr}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
