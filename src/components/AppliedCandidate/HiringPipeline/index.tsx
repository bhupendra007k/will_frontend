import { IData } from '../DummyData/data'
import GridView from './GridView'
import ListView from './ListView'
export interface ICandidateData {
  data: IData[]
  activeView: 'listview' | 'gridview'
}
export const HiringPipeline = ({ data, activeView }: ICandidateData) => {
  return <>{activeView === 'listview' ? <ListView data={data} /> : <GridView data={data} />}</>
}
