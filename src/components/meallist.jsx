import { Meal } from "./meal";
import s from "./categorylist.module.css";

function MealList({ meals }) {
    return (
        <div className={s.goods_list}>
            {meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}

export { MealList };