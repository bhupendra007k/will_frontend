import { useState, useEffect } from 'react'
import { IData, TotalData } from 'components/AppliedCandidate/DummyData/data'

import {
  Container,
  Wrapper,
  HandleBar,
  CandidateValue,
  SwitchingDiv,
  LeftBar,
  ToggleSection,
  StyledButtons,
  Icon,
  DataDisplay,
} from 'styles/CandidatePan'

import ListIcon from 'assets/images/ListApplied.png'
import GridIcon from 'assets/images/GridApplied.png'
import { HiringPipeline } from './HiringPipeline'
import { PreonboardingPipeline } from './PreOnboardingPipeline'

const Candidates = () => {
  const [show, setShow] = useState(true)
  const [testshow, setTestShow] = useState(false)
  const [visible, setVisible] = useState(true)
  const [notVisible, setNotVisible] = useState(false)
  const [active, setActive] = useState('HiringPipelineCard')
  const [activeData, setActiveData] = useState<IData[]>([])
  const [activeStyle, setActiveStyle] = useState(true)
  const [activeView, setActiveView] = useState<'listview' | 'gridview'>('listview')

  const _ = require('lodash')
  const filter_data = _.filter(TotalData, (e: any) => e.mainStage === 'Pre Onboarding' || e.mainStage === 'Hired')

  const buttonData = [
    { name: 'Hiring PipeLine', active: show },
    { name: 'Pre Onboarding', active: testshow },
  ]
  const styleButtonData: { src: any; active: boolean; name: 'listview' | 'gridview' }[] = [
    { name: 'listview', src: ListIcon, active: visible },
    { name: 'gridview', src: GridIcon, active: notVisible },
  ]

  useEffect(() => {
    if (active === 'HiringPipelineCard') {
      setActiveData(TotalData)
    } else {
      setActiveData(filter_data)
    }
  }, [active])

  const changeState = (value: any) => {
    if (value === 'Hiring PipeLine') {
      setShow(true)
      setTestShow(false)
      setActive('HiringPipelineCard')
    } else {
      setTestShow(true)
      setShow(false)
      setActive(filter_data)
    }
  }
  const changeToggle = (value: any) => {
    if (value === 'listview') {
      setVisible(true)
      setNotVisible(false)
    } else {
      setVisible(false)
      setNotVisible(true)
    }
  }

  return (
    <Container>
      <Wrapper>
        <HandleBar>
          <LeftBar>
            <CandidateValue>
              Total Candidate:<p>{TotalData.length}</p>
            </CandidateValue>
            <hr />

            <ToggleSection>
              {styleButtonData.map((e: any, index: any) => (
                <StyledButtons
                  key={index}
                  className={e.active ? 'display-switch active' : 'display-switch'}
                  onClick={() => {
                    changeToggle(e.name)
                    setActiveView(e.name)
                    if (e.name === 'listview') setActiveStyle(activeStyle)
                    else setActiveStyle(!activeStyle)
                  }}
                >
                  <Icon src={e.src} />
                </StyledButtons>
              ))}
            </ToggleSection>
          </LeftBar>
          <SwitchingDiv>
            {buttonData.map((e: any, index: any) => (
              <button
                key={index}
                className={e.active ? 'button-switch active' : 'button-switch'}
                onClick={() => {
                  changeState(e.name)
                  setActiveData(activeData)
                }}
              >
                {e.name}
              </button>
            ))}
          </SwitchingDiv>
        </HandleBar>
        <DataDisplay>
          {active === 'HiringPipelineCard' ? (
            <HiringPipeline data={activeData} activeView={activeView} />
          ) : (
            <PreonboardingPipeline data={activeData} activeView={activeView} />
          )}
        </DataDisplay>
      </Wrapper>
    </Container>
  )
}

export default Candidates
