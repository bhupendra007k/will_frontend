import { Progress } from 'antd'
import 'antd/dist/antd.min.css'
import { Container } from 'styles/progrss/index'
const ProgressChart = ({ percent, strokeColor }: any) => {
  return (
    <Container className="progressContainer">
      <Progress
        className="progress"
        type="circle"
        percent={percent}
        width={70}
        strokeColor={strokeColor}
        strokeWidth={20}
        strokeLinecap={'square'}
        trailColor={'#00000021'}
        box-shadow={'0px 4px 0px #3E49540A'}
      />
    </Container>
  )
}

export default ProgressChart
