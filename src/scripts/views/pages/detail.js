import UrlParser from '../../routes/url-parser';
import TherestodbSource from '../../data/therestodb-source';
import { RestaurantsDetailTemplate } from '../templates/template-creator';
const detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
      <div id="restaurants" class="restaurants"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TherestodbSource.detailMenu(url.id);
     const restaurantContainer = document.querySelector('#restaurants');
    restaurantContainer.innerHTML = RestaurantsDetailTemplate(restaurant.restaurant);
    // console.log(resto);
    // Fungsi ini akan dipanggil setelah render()
    
  },
};
 
export default detail;