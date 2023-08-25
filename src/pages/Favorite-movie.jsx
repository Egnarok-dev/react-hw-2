import React from 'react';
import style from '../styles/movie.module.css'


const FavoriteMovie = (props) => {
    console.log(props);
    const { title, firstImg, secondImg, thirdImg, director, studio, article } = props.movie
    return (
        <div className={style.main}>
            <h1 style={{ color: "#323232", fontSize: "32px" }}>{title}</h1>
            <div className={style.card}>
                <p><span> <img src={firstImg} alt="" style={{borderRadius:"10px", width:"170px", marginBottom:"10px"}}/></span></p>
                <p><span><img src={secondImg} alt="" style={{borderRadius:"10px", width:"180px", marginBottom:"10px"}}/></span></p>
                <p><span><img src={thirdImg} alt="" style={{borderRadius:"10px", width:"180px", marginBottom:"10px"}}/></span></p>
            </div>
            <h2 style={{ color: "#323232", fontSize: "18px" }}>Режисер: {director}</h2>
            <h3 style={{ color: "#323232", fontSize: "18px" }}>Кінокомпанія: {studio}</h3>
            <p style={{ color: "#323232", fontSize: "16px" }}>{article}</p>
        </div>

    );
}

export default FavoriteMovie;
