import React, { useState } from 'react'
import { Slider } from 'antd'
import 'antd/dist/antd.min.css'
import 'App.css'
import { SliderValue, SliderContainer } from 'styles/Slider'
const SliderButton = (props: any) => {
  const [currentValue, setCurrentValue] = useState(0)

  return (
    <SliderContainer className={props.className}>
      <SliderValue className="value">{currentValue}%</SliderValue>
      <Slider
        defaultValue={0}
        disabled={false}
        max={100}
        onChange={(value) => {
          setCurrentValue(value)
        }}
        className="slider"
      />
    </SliderContainer>
  )
}

export default SliderButton
