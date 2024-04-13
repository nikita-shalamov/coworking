import { Select } from "antd"

export default function Filters() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`)
    }

    return (
        <div className="filters">
            <div className="container">
                <div className="filters__list">
                    <Select
                        className="filters__item"
                        defaultValue="lucy"
                        onChange={handleChange}
                        options={[
                            { value: "jack", label: "Jack" },
                            { value: "lucy", label: "Lucy" },
                            { value: "Yiminghe", label: "yiminghe" },
                            { value: "disabled", label: "Disabled", disabled: true },
                        ]}
                    />
                    <Select
                        className="filters__item"
                        defaultValue="lucy"
                        onChange={handleChange}
                        options={[
                            { value: "jack", label: "Jack" },
                            { value: "lucy", label: "Lucy" },
                            { value: "Yiminghe", label: "yiminghe" },
                            { value: "disabled", label: "Disabled", disabled: true },
                        ]}
                    />
                    <Select
                        className="filters__item"
                        defaultValue="lucy"
                        onChange={handleChange}
                        options={[
                            { value: "jack", label: "Jack" },
                            { value: "lucy", label: "Lucy" },
                            { value: "Yiminghe", label: "yiminghe" },
                            { value: "disabled", label: "Disabled", disabled: true },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
