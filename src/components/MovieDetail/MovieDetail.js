import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { fetchFilmById } from '../../utilis/network';
import styles from './MovieDetail.module.scss';
import img1 from '../pics/it.jpg';

const API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_SLIDER_URL = process.env.REACT_APP_SLIDER_URL || 'http://localhost:3000';

export default function MovieDetail() {
  let { id } = useParams();
  const [film, setFilm] = useState({});

  const URL_FILM_BY_ID = `movie/${id}?api_key=${API_KEY}`

  const getAllData = async () => {
    setFilm(await fetchFilmById(URL_FILM_BY_ID));
  }

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <div className={styles.login}>
      <div
        className={styles.logintotal}
        style={{ backgroundImage: `url(${REACT_APP_SLIDER_URL}${film.poster_path})` }}
      >
        <div className={styles.loginshadow}>
          <div className={styles.logincontext}>
            <div className={styles.loginlogocontainer}>
              <Link className={styles.loginlogo} to='/'>
                {' '}
                CanalFlix{' '}
              </Link>
            </div>
            <div className={styles.textcontainer}>
              <p> Title </p>
            </div>
            <div className={styles.newusercontainer}>
              <p className={styles.newusertext}> {film.title} </p>
            </div>
            <div className={styles.textcontainer}>
              <p> Overview </p>
            </div>
            <div className={styles.newusercontainer}>
              <p className={styles.newusertext}> {film.overview} </p>
            </div>
            <div className={styles.textcontainer}>
              <p> Tagline </p>
            </div>
            <div className={styles.newusercontainer}>
              <p className={styles.newusertext}> {film.tagline} </p>
            </div>
            <div className={styles.textcontainer}>
              <p> Release date </p>
            </div>
            <div className={styles.newusercontainer}>
              <p className={styles.newusertext}> {film.release_date} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
