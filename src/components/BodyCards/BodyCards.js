
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchGender } from '../../utilis/network';
import Star from '../Icons/Star';
import Adult from '../Icons/Adult';
import styles from './BodyCards.module.scss';
import '@fontsource/epilogue';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function BodyCards({ id, name, pic, imdb, date, adult, genre, popularity }) {
  const [imdbIsTrue, setImdbIsTrue] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate()

  const URL_GENDER = `genre/movie/list?api_key=${API_KEY}&language=en-US`

  const falseHovering = () => {
    setHovering(false);
  };

  const trueHovering = () => {
    setHovering(true);
  };

  const getAllData = async () => {
    const data = await fetchGender(URL_GENDER);
    setGenres(data);
  }

  useEffect(() => {
    if (imdb === 0) {
      setImdbIsTrue(false);
    }

    getAllData()
  }, []);

  const genreName = genres.filter((item) => genre.includes(item.id)).slice(0, 5);

  return (
    <div
      className={styles.onemoviecontainer}
      onMouseOver={trueHovering}
      onMouseLeave={falseHovering}
      onClick={() => navigate(`/movie/${id}`)}
    >
      {adult && <Adult />}

      <div className={styles.imgcontainer}>
        {hovering && (
          <div className={styles.containercontainer}>
            <div className={styles.popularitycontainer}>
              <p className={styles.popularitytext}> Popularity : </p>
              <p className={styles.popularity}> {popularity} </p>
            </div>
            <div className={styles.bodyimdbcontainer}>
              <Star className={styles.star} />
              <p className={styles.bodyimdbtext}> IMDB : </p>
              {imdbIsTrue ? (
                <p className={styles.bodyimdb}> {imdb} / 10</p>
              ) : (
                <p className={styles.bodyimdb}> Unknown </p>
              )}
            </div>
          </div>
        )}
        <img src={pic} alt={name} />
      </div>

      <div className={styles.bodycontext}>
        <p className={styles.bodyname}> {name} </p>
        <div className={styles.bodygenderyear}>
          <p className={styles.bodydate}> {date} </p>
          <div className={styles.genrecontainer}>
            {genreName.map((e) => (
              <p className={styles.genre}> {e.name} </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
