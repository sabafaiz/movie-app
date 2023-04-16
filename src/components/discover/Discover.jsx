import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DetailCard from '../detailsCard/DetailCard';

function Discover() {

  const [movieData, SetMovieData] = useState([])

  const getMovie = async () => {
    try {
      const { data } = await axios.get("https://run.mocky.io/v3/5327a2fd-6c47-45f5-8fee-6d1479208ebe");
      SetMovieData(data);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovie();
  }, []);


  return (
    <div>
      <Grid sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
        {
          movieData && movieData.length > 0 &&
          movieData.map((movie) =>
            <MovieCard key={movie.imdbID} movieData={movie} />)
        }
      </Grid>
      <Grid sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
        {
          movieData && movieData.length > 0 &&
          movieData.map((movie) =>
            <DetailCard key={movie.imdbID} movieData={movie} />)
        }
      </Grid>
    </div>
  )
}

export default Discover
