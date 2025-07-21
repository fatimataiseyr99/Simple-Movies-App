import React from 'react'
import Movie from "./Movie"
import styled from 'styled-components'
import movies from "../moviesData"

const Container = styled.div`
padding:2rem;
display:grid;
grid-template-columns: auto auto auto;
grid-gap: 2rem;
`

const MoviesList = ( ) => {
  
const findmovies= movies.filter( movie=> movie.release_Date ===2021)   
const movieslist = findmovies.map( movie=>
( <Movie  key ={ movie.movie_id } movie={movie}/>))
return(
    <Container>
      
    { movieslist }
   
   
    </Container>
  
  
   
  )
}

export default MoviesList
