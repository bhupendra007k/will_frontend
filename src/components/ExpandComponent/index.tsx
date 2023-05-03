import { Collapse } from 'antd'
import ProfileCard from 'components/InterviewerModal/ProfileCard'
import { TextData } from 'styles/ProfileModal'
const { Panel } = Collapse

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut in labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Int Nunc mattis enim ut tellus elementum sagittis vitae et leo. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Bibendum neque egestas congue quisque egestas int diam in arcu cursus. Sed sed risus pretium quam vulputate dignissim.
`

const Expand: React.FC = () => (
  <Collapse defaultActiveKey={['1']}>
    <Panel key="1" header={<ProfileCard />}>
      <TextData>{text}</TextData>
    </Panel>
  </Collapse>
)

export default Expand
