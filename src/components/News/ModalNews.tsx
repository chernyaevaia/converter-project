import { observer } from 'mobx-react';
import { useEffect, useMemo } from 'react';
import { INewsStore } from './NewsStore';
import { ModalNewsView } from './ModalNewsView';
import { ModalNewsViewModel } from './ModalNewsViewModel';
import { DiContainer } from '../../di';
import { useParams } from 'react-router-dom';

export const ModalNews: React.FC = observer(() => {


 const { newsId } = useParams();
 console.log(newsId)

  const newsStore = DiContainer.get(INewsStore);
  const viewModel = useMemo(() => new ModalNewsViewModel(newsStore, newsId), [newsStore, newsId]);

  console.log(viewModel)

  useEffect(() => {
    viewModel.init();
  }, [viewModel]);

  if (!viewModel.ready) return null;
  if (!viewModel.id) return null;

  return (
    <>
    <ModalNewsView
      title={viewModel.title}
      description={viewModel.description}
      urlToImage={viewModel.urlToImage}
    />
    </>
  );
});