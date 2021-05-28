import TherestodbSource from '../../data/therestodb-source';
import { RestaurantsTemplate } from '../templates/template-creator';
 
const menu = {
  async render() {
    return `
    <div class="content">
    <h2 >Menu Page</h2>
        <div id="restaurants" class="restaurants">
        </div>
    `;
  },
 
  async afterRender() {
    const restaurants = await TherestodbSource.newMenuResto();
     const restaurantsContainer = document.querySelector('#restaurants');
     restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += RestaurantsTemplate(restaurant);
    });
    // console.log(restaurants);
    // Fungsi ini akan dipanggil setelah render()
  },
};
 
export default menu;