
import { observer } from "mobx-react"
import { useMemo } from "react"
import { INewsStore } from "./NewsStore"
import { NewsView } from './NewsView'
import { NewsViewModel } from './NewsViewModel'
import { DiContainer } from '../../di/DIContainer'

export const News: React.FC = observer(() => {
  const newsStore = DiContainer.get(INewsStore)
  const viewModel = useMemo(() => new NewsViewModel(newsStore), [newsStore]);

  return <NewsView 
    title={viewModel.title}
    description={viewModel.description}
    image={viewModel.image}
    onClick={viewModel.onClick}
  />
});

