import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"



const Container= styled.div`
background-color:#fff;
padding:1rem;
display:flex;
flex-direction:column;
width:20rem;
height:35rem;
border-radius: 2rem;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

h4{
  text-align:center;
}
p{
  height:8rem;
  overflow-y:scroll;
  padding:1rem;
  text-align:justify;
  line-height:2.2rem;

}
`
const ImageContainer = styled.div`
height:15rem;
width:100%;
display:flex;
flex-direction:row;
justify-content:center;


img{
height:100%;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius:1rem;
background-color:#fff;

}

`

const Movie = ({movie}) => {
  return (
   <Container>
    <h4>{movie.title} | { movie.release_Date } </h4>
    <ImageContainer>
      <img src={movie.poster_src}/>
    </ImageContainer>
    <p>
   { movie.description }
    </p>
   </Container>
  )
}

Movie.propTypes={
  movie:PropTypes.object.isRequired
}
export default Movie
