import React from 'react';

import SeriesCardsTwo from '../SeriesCardsTwo/SeriesCardsTwo';
import styles from './SeriesBodyTwo.module.scss';

export default function SeriesBodyTwo({ series2 }) {

  const REACT_APP_SLIDER_URL = process.env.REACT_APP_SLIDER_URL || 'http://localhost:3000';

  return (
    <>
    <div className={styles.total2}>
      <div className={styles.seriesslider2}>
        {series2.map((x) => {
          return (
            <SeriesCardsTwo
              pic={`${REACT_APP_SLIDER_URL}${x.poster_path}`}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}
SeriesBodyTwo.defaultProps= {
  series2: []
}
