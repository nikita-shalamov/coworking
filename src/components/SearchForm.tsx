import { Button, Input, Select, Space } from "antd"

const { Search } = Input

export default function SearchForm() {
    const onChange = (value: string) => {
        console.log(`selected ${value}`)
    }

    const onSearch = (value: string) => {
        console.log("search:", value)
    }

    // Filter `option.label` match the user type `input`
    const filterOption = (input: string, option?: { label: string, value: string }) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())

    return (
        <div className="search-form">
            <div className="container">
                <div className="search-form__wrapper">
                    <Space.Compact size="large" style={{ width: "100%", height: "50px" }}>
                        <Select
                            showSearch
                            placeholder="Город"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={filterOption}
                            style={{ width: "170px", height: "100%" }}
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                                {
                                    value: "tom",
                                    label: "Tom",
                                },
                            ]}
                        />
                        <Input placeholder="Введите название коворкинга" />
                        <Button type="primary" style={{ width: "150px", height: "100%" }}>
                            Искать
                        </Button>
                    </Space.Compact>
                </div>
            </div>
        </div>
    )
}
