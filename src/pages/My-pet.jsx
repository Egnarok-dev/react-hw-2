import React from 'react';
import style from '../styles/pet.module.css'

const MyPet = (props) => {
    const {name, img, type, age, article} = props.pet
    return (
        <div>
            <div className={style.card}>
            <img src={img} alt="" style={{width:"295px", height:"195px", borderRadius:"10px"}}/>
            <div className={style.card__content}>
                <p className={style.card__title}>Мій {type} {name}</p>
                <p className={style.card__description}>{article}</p>
            </div>
            </div>
        </div>
    );
}

export default MyPet;
