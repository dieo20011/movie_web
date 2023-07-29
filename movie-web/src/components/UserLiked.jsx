import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres, getUserLikedMovies } from "../store";
import { styled } from "styled-components";
import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";
import { NotAvaiable } from "../components/NotAvaiable";
import { SelectGenre } from "../components/SelectGenre";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { Card } from "./Card";


export const UserLiked = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);

  const [email, setEmail] = useState(false);
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if(email){
        dispatch(getUserLikedMovies(email));
    }
  }, [email]);



  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return <Container>
    <Navbar isScrolled={isScrolled}/>
    <div className="content flex column">
        <h1>My list</h1>
        <div className="grid flex">
            {movies.map((movie, index)=>{
                return <Card movieData={movie} index={index} key={movie.id} isLiked={true}/>
            })}
        </div>
    </div>
  </Container>;
};
const Container = styled.div`
    .content{
        margin :2.3rem;
        margin-top:8rem;
        gap:3rem;
        h1{
            margin-left:3rem; 
        }
        .grid{
            flex-wrap: wrap;
            gap:1rem;
        }
    }
`;
