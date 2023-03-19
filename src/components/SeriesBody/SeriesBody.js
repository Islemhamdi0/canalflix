import React from 'react';

import SeriesCards from '../SeriesCards/SeriesCards';
import styles from './SeriesBody.module.scss';

export default function SeriesBody({ series }) {

  const REACT_APP_SLIDER_URL = process.env.REACT_APP_SLIDER_URL || 'http://localhost:3000';

  return (
    <div className={styles.total}>
      <div className={styles.seriesslider}>
        {series.map((x) => {
          return (
            <SeriesCards
              pic={`${REACT_APP_SLIDER_URL}${x.poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
}
SeriesBody.defaultProps= {
  series: []
}