import CONFIG from '../../globals/config';

const RestaurantsDetailTemplate = (restaurant) => `
  <h2 class="restaurants__title">${restaurant.name}</h2>
  <img class="restaurants__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurants__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kategori Menu</h4>
    <p>${restaurant.categories.map((categori) => `
    <div class="restaurantInfoList">
            <h6 tabindex="0">${categori.name}</h6>
            
        </div>`).join('')}</p>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((food) =>`
    <div class="restaurantInfoList">
            <h6 tabindex="0">${food.name}</h6>
            
        </div>`).join('')}</p>
        <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((drink) =>`
    <div class="restaurantInfoList">
            <h6 tabindex="0">${drink.name}</h6>
        </div>`).join('')}</p>
        <h4>Rating</h4>
      <h6 tabindex="0">${restaurant.rating}</h6>
      <h4>Customer Rating</h4>
     ${restaurant.customerReviews.map((review) => `
        <div class="restaurantInfoList">
            <h6 tabindex="0">${review.name}</h6>
            <p tabindex="0" class="date-review">${review.date}</p>
            <p tabindex="0">${review.review}</p>
        </div>
    `).join('')}
  </div>`;
 
const RestaurantsTemplate = (restaurants) => `
  <div class="restaurants-item">
    <div class="restaurants-item__header">
        <img class="restaurants-item__header__poster" alt="${restaurants.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
        <div class="restaurants-item__header__rating">
            <p>⭐️<span class="restaurants-item__header__rating__score">${restaurants.rating}</span></p>
        </div>
    </div>
    <div class="restaurants-item__content">
        <h3><a href="${`/#/detail/${restaurants.id}`}">${restaurants.city}</a></h3>
        <p>${restaurants.description}</p>
    </div>
  </div>
  `;
 
export { RestaurantsTemplate, RestaurantsDetailTemplate };