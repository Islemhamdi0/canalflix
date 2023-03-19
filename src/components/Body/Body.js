import React, { useState, useEffect } from 'react';

import { fetchData } from '../../utilis/network';
import BodyCards from '../BodyCards/BodyCards';
import styles from './Body.module.scss';

const API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_SLIDER_URL = process.env.REACT_APP_SLIDER_URL || 'http://localhost:3000';

export default function Body({ topMovies, nowMovies, upMovies }) {
  const [n, setn] = useState(1);
  const [selectedGender, setSelectedGender] = useState(1);
  const [showMovies1, setShowMovies1] = useState(topMovies);
  const [showMovies2, setShowMovies2] = useState(topMovies);
  const [showMovies3, setShowMovies3] = useState(topMovies);

  let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const URL_NOW_MOVIES = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=${n}`;
  const URL_TOP_MOVIES = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=${n}`;

  const getAllData = async () => {
    setShowMovies1(await fetchData(URL_TOP_MOVIES));
    setShowMovies2(await fetchData(URL_TOP_MOVIES));
    setShowMovies3(await fetchData(URL_NOW_MOVIES));
  }

  useEffect(() => {
    getAllData()
  }, [n]);

  const clickedTop = () => {
    setSelectedGender(1);
    setShowMovies1(topMovies);
  };
  const clickedNow = () => {
    setSelectedGender(2);
    setShowMovies2(nowMovies);
  };
  const clickedUp = () => {
    setSelectedGender(3);
    setShowMovies3(upMovies);
  };

  const movies1 = showMovies1.slice(0, 10);
  const movies2 = showMovies1.slice(10, 20);
  const movies3 = showMovies2.slice(0, 10);
  const movies4 = showMovies2.slice(10, 20);
  const movies5 = showMovies3.slice(0, 10);
  const movies6 = showMovies3.slice(10, 20);

  const getButtons = (selected) => {
    return buttons.map(i =>(
        <button
          onClick={() => setn(i)}
          className={i===selected ? styles['selected'] : styles.not}
        >{i}</button>
      ));
  }

  return (
    <>
      <div className={styles['choose-container']} onScroll={clickedTop}>
        <div
          className={
            selectedGender === 1
              ? styles['top-container']
              : styles['top-container-low-opacity']
          }
          onClick={clickedTop}
        >
          <div className={styles.line}></div>
          <p className={styles.top}> TOP RATED </p>
        </div>
        <div
          className={
            selectedGender === 2
              ? styles['now-container']
              : styles['now-container-low-opacity']
          }
          onClick={clickedNow}
        >
          <div className={styles.line}></div>
          <p className={styles.top}> NOW PLAYING </p>
        </div>
        <div
          className={
            selectedGender === 3
              ? styles['up-container']
              : styles['up-container-low-opacity']
          }
          onClick={clickedUp}
        >
          <div className={styles.line}></div>
          <p className={styles.top}> POPULAR </p>
        </div>
      </div>

      {(selectedGender === 1) && (
        <div className={styles.allbody}>
          <div className={styles.firstbody}>
            {movies1.map((obj) => {
              return (
                <BodyCards
                  id={obj.id}
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`${REACT_APP_SLIDER_URL}${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div>
          <div className={styles.secondbody}>
            {movies2.map((obj) => {
              return (
                <BodyCards
                  id={obj.id}
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`${REACT_APP_SLIDER_URL}${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div>
        </div>
      )}

      {(selectedGender === 2) && (
        <div className={styles.allbody}>
          <div className={styles.firstbody}>
            {movies3.map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`${REACT_APP_SLIDER_URL}${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div>
          <div className={styles.secondbody}>
            {movies4.map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`${REACT_APP_SLIDER_URL}${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div>
        </div>
      )}

      {(selectedGender === 3) && (
        <div className={styles.allbody}>
          <div className={styles.firstbody}>
            {movies5.map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`${REACT_APP_SLIDER_URL}${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div>
          <div className={styles.secondbody}>
            {movies6.map((obj) => {
              return (
                <BodyCards
                  popularity={obj.popularity}
                  genre={obj.genre_ids}
                  adult={obj.adult}
                  name={obj.title}
                  pic={`${REACT_APP_SLIDER_URL}${obj.backdrop_path}`}
                  imdb={Math.round(obj.vote_average * 10) / 10}
                  date={obj.release_date.substr(0, 4)}
                />
              );
            })}
          </div>
        </div>
      )}

      <div className={styles['all-btns']}>
        {getButtons(n)}
      </div>

    </>
  );
}

Body.defaultProps = {
  topMovies: [], 
  nowMovies: [], 
  upMovies: []
}
