
import React from 'react';
import s from './categoryitem.module.css';
import { Link } from "react-router-dom";

function CategoryItem(props) {
    const { 
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props;

   

    return (
        <div className={s.card}>
            <div>
                <img className={s.card_img_top} src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className={s.card_body}>
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className="btn btn-dark col-12">
                    Watch category
                </Link>
            </div>

        </div>
    );
}

export { CategoryItem };
