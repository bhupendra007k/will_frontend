import { IData } from 'components/AppliedCandidate/DummyData/data'
import PreonboardingGridView from './GridView'
import PreonboardingListView from './ListView'
interface ICandidateData {
  data: IData[]
  activeView: 'listview' | 'gridview'
}
export const PreonboardingPipeline = ({ data, activeView }: ICandidateData) => {
  return (
    <>{activeView === 'listview' ? <PreonboardingListView data={data} /> : <PreonboardingGridView data={data} />}</>
  )
}
