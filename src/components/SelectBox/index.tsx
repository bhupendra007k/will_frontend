import { Select } from 'antd'
import 'index.css'
import 'antd/dist/antd.min.css'
interface IOption {
  value: string
  label: string
}
interface ISelect {
  defaultValue: string
  data: IOption[]
  setData: any
  control: any
}

const { Option } = Select

const SelectBox = ({ data, defaultValue, setData }: ISelect) => (
  <Select
    defaultValue={defaultValue}
    onChange={(e) => {
      setData(e)
    }}
  >
    {data.map((item, index) => (
      <Option key={index} value={item.value}>
        {item.label}
      </Option>
    ))}
  </Select>
)

export default SelectBox
