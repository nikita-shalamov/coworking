import { useCities } from "@/hooks/useCities"
import { Button, Input, Select, Space } from "antd"

export default function SearchForm() {
    const onChange = (value: string) => {
        if (value in citiesWithMetro) {
            console.log("метро")
        }
    }

    const onSearch = (value: string) => {
        console.log("search:", value)
    }

    const handleChange = (value: string) => {
        console.log(`selected ${value}`)
    }

    const options = [
        { value: "Все услуги", label: "Все услуги" },
        { value: "Рабочее место", label: "Рабочее место" },
        { value: "Офис", label: "Офис" },
        { value: "Переговорка", label: "Переговорка" },
    ]

    const optionsCities = [
        {
            value: "москва",
            label: "Москва",
        },
        {
            value: "санкт-петербург",
            label: "Санкт-петербург",
        },
        {
            value: "tom",
            label: "Tom",
        },
    ]

    const cities = useCities()
    console.log(cities.data)

    const filterCities =
        cities.data &&
        cities.data.map((city: any) => {
            return {
                value: city.id,
                label: city.name, // Используем оригинальное название города для отображения
            }
        })

    const citiesWithMetro = ["москва", "санкт-петербург"]
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
                            style={{ width: "300px", height: "50px" }}
                            options={filterCities}
                        />
                        <Select placeholder="Услуги" defaultValue="Все услуги" optionFilterProp="children" onChange={onChange} style={{ width: "300px", height: "50px" }} options={options} />
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
