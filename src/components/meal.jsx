import { Link } from "react-router-dom";
import s from './categoryitem.module.css';

function Meal(props) {
    const { strMeal, idMeal, strMealThumb } = props;

    return (
        <div className={s.card}>
            <div>
                <img className={s.card_img_top} src={strMealThumb} alt={strMeal} />
            </div>
            <div className={s.card_content}>
                <div className={s.card_body}>
                    <span className="card-title">{strMeal}</span>
                </div>
                <div className="card-action">
                    <Link to={`/meal/${idMeal}`} className="btn btn-dark col-12">
                        Watch recipe
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { Meal };