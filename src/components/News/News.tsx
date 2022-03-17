import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { INewsStore } from './NewsStore';
import { NewsView } from './NewsView';
import { NewsViewModel } from './NewsViewModel';
import { DiContainer } from '../../di';
import {NavLink } from 'react-router-dom';
import styles from './news.module.scss';

export const News: React.FC = observer(() => {

  
  const newsStore = DiContainer.get(INewsStore);
  const viewModel = useMemo(() => new NewsViewModel(newsStore), [newsStore]);

  if (!viewModel.ready) return null;

  return (
    <>
    <NewsView
      title={viewModel.title}
      description={viewModel.description}
      urlToImage={viewModel.urlToImage}
      nextClick={viewModel.nextClick}
      backClick={viewModel.backClick}
    />
    <NavLink to={`/${viewModel.pageNumber}`}>
    <button className={styles.readMoreBtn}>Read more</button>
    </NavLink>
    </>
  );
});
