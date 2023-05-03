import React from 'react'
import 'antd/dist/antd.min.css'
import { Checkbox, Collapse } from 'antd'
import { SearchFilter, SearchFilterContent, SearchImgWrapper, CheckContent } from 'styles/SearchJob'
import SearchInputImg from 'assets/images/searchInput.png'
import { type, experience, language } from 'components/FilterContent/data'
import Graph from 'components/SalaryGraph'
const { Panel } = Collapse

const FilterContet = () => {
  return (
    <>
      <Collapse bordered={false} expandIconPosition={'right'}>
        <Panel header="Job Type" key="1">
          {type.map((value, index) => (
            <div key={index}>
              <Checkbox type="checkbox" />
              <CheckContent>{value.name}</CheckContent>
            </div>
          ))}
        </Panel>
        <Panel header="Location" key="2">
          <SearchFilter>
            <SearchImgWrapper src={SearchInputImg} />
            <SearchFilterContent type="search" placeholder="Search something here..." />
          </SearchFilter>
        </Panel>
        <Panel header="Salary Range" key="3">
          <Graph></Graph>
        </Panel>
        <Panel header="Experience Level" key="4">
          {experience.map((value, index) => (
            <div key={index}>
              <Checkbox type="checkbox" />
              <CheckContent>{value.name}</CheckContent>
            </div>
          ))}
        </Panel>

        <Panel header="Language" key="5">
          {language.map((value, index) => (
            <div key={index}>
              <Checkbox type="checkbox" />
              <CheckContent>{value.name}</CheckContent>
            </div>
          ))}
        </Panel>
      </Collapse>
      <br />
    </>
  )
}

export default FilterContet
