import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import SinglePage from './components/SinglePage/SinglePage';
import MovieDetail from './components/MovieDetail/MovieDetail'
import { fetchData } from './utilis/network';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [items, setItems] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [nowMovies, setNowMovies] = useState([]);
  const [upMovies, setUpMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [series2, setSeries2] = useState([]);

  const URL_ITEMS = `trending/movie/week?api_key=${API_KEY}&language=en-US`;
  const URL_TOP_MOVIES = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const URL_NOW_MOVIES = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  const URL_UP_MOVIES = `movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const URL_SERIES = `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const URL_SERIES2 = `tv/top_rated?api_key=${API_KEY}&language=en-US&page=2`;

  const getAllData = async () => {
    setItems(await fetchData(URL_ITEMS));
    setTopMovies(await fetchData(URL_TOP_MOVIES));
    setNowMovies(await fetchData(URL_NOW_MOVIES));
    setUpMovies(await fetchData(URL_UP_MOVIES));
    setSeries(await fetchData(URL_SERIES));
    setSeries2(await fetchData(URL_SERIES2));
  }

  

  useEffect(() => {
    getAllData()
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LogIn />}></Route>
        <Route
          path='/'
          element={
            <Home
              items={items}
              topMovies={topMovies}
              nowMovies={nowMovies}
              upMovies={upMovies}
              series={series}
              series2={series2}
            />
          }
        ></Route>
        <Route path='movie/:id' element={<MovieDetail />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
        <Route path='singlepage' element={<SinglePage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
