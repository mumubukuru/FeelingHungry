const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
        createMeal(res.meals[0])
        })
});

function createMeal(meal) {
    const ingredients = [];
    for(i=1; i<=20; i++) {
        if(meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - 
                ${meal[`strMeasure${i}`]}`
                )
        } else {
            break;
        }
    }


    mealContainer.innerHTML = ` 
        <div class="inner-html" style="display:flex; margin-left: 10%; margin-right: 10%;">

            <div class="food-name-image" class="img-h4" style="width: 50%;">
                <h4 style="color: black;">${meal.strMeal}</h4>
                <img src="${meal.strMealThumb}" alt="Meal Image"/>
            </div>

            <div class="ingredients-div" style="padding-left: 50px; padding-top: 30px; width: 50%;">
                <h5 style="color: black; padding-left: 17px;">Ingredients</h5>
                <ul style="padding-top: 10px; margin-top: -10px;">
                    ${ingredients.map(ingredients => `
                        <li style="color: black;">${ingredients}</li>
                        `).join('')}
                </ul>
            </div>

            </div>
        <div class="video-wrapper-div">
            <h5 style="text-align: center; margin-bottom: 0px;">Video Recipe</h5>
            <div class="videoWrapper">
                <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"  />
            </div>
        </div>
     `; 
}