import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import backgroundLogo from "../assets/optimus.jpg";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { Slider } from "../components/Slider";


export const Netflix = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
  const dispatch= useDispatch();
  const movies = useSelector((state)=>state.netflix.movies);
  useEffect(()=>{
    dispatch(getGenres());
  },[]);
  useEffect(()=>{
    if(genresLoaded) dispatch(fetchMovies({type: "all"}));
  })
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundLogo}
          alt="background"
          className="background__image"
        />
        <div className="container">
          <div className="buttons flex">
            <button className="flex j-center a-center" onClick={()=> navigate("/player")}><FaPlay/> Play</button>
            <button className="flex j-center a-center"><AiOutlineInfoCircle/> More Info</button>
          </div>
        </div>
      </div>
      <Slider movies={movies}/>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  .hero{
    position: relative;
    .background__image{
      filter: brightness(60%);
    }
    img{
      height: 110vh;
      width: 100vw;
    }
    .container{
      position: absolute;
      bottom: 8rem;
      h1{
        font-size: 4rem;
        margin-left: 5rem;
      }
      .logo{
        img{
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons{
        margin: 5rem;
        gap: 2rem;
        button{
          font-size: 1.2rem;
          gap:1rem;
          border-radius: 0.2rem;
          padding: 0.4rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.3 ease-in-out;
          &:hover{
            opacity: 0.8;
          }
          &:nth-of-type(2){
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg{
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
