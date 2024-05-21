import React from 'react';
import {CategoryItem} from "./categoryitem";
import s from "./categorylist.module.css";

function CategoryList({ catalog = []}) {

    return (

        <div className={s.goods_list}>
            {catalog.map((el) => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    )
}

export {CategoryList};