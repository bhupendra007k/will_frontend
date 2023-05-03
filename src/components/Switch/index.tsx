import React from 'react'
import { Switch } from 'antd'

interface ISwitchProps {
  onChange?: () => void
}

const SwitchButton: React.FC<ISwitchProps> = ({ onChange }: ISwitchProps) => (
  <Switch defaultChecked onChange={onChange} />
)

export default SwitchButton
