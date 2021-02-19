const findFoods = () => {
    document.getElementById('error-message').innerText = "";

    const userInput = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
        .catch(error => displayError('Sorry! nothing found'));
}
const displayFoods = foods => {
    const foodsDiv = document.getElementById('foods');
    foodsDiv.innerHTML = "";
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.innerHTML = `
        <div onclick="getFood('${food.idMeal}')"  class="text-center shadow">
            <div  class="card-body css-style-card">
                <img src="${food.strMealThumb}" class="img-size card-img " alt="...">
                <h5 class="card-title">${food.strMeal}</h5>
                </button>
            </div>
        </div>
        `;
        foodsDiv.appendChild(foodDiv);
    });
}
const getFood = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoodInfo(data.meals[0]));
}

const displayFoodInfo = food => {
    console.log(food);
    const foodDetailDiv = document.getElementById('food-details');
    const foodDetails = `
     <h1>Meal: ${food.strMeal}</h1>
     <h3>Drink Alternate: ${food.strDrinkAlternate}</h3>
     <h3>Category: ${food.strCategory}</h3>
     <h3>Area: ${food.strArea}</h3>
     `;
    foodDetailDiv.innerHTML = foodDetails;
}




const displayError = error => {
    const errorTag = document.getElementById('error-message');

    errorTag.innerText = error;
}