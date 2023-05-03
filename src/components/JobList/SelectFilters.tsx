import React, { ReactElement, useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { IData } from 'components/JobList/data'

export default function SelectFilters(props: { heading: any | ReactElement; options: Array<IData> }) {
  const [selected, setSelected] = useState([])

  return (
    <div>
      <MultiSelect
        onChange={setSelected}
        labelledBy={'select'}
        value={selected}
        options={props.options}
        overrideStrings={{
          selectSomeItems: props.heading,
        }}
      />
    </div>
  )
}
