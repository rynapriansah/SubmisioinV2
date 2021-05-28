import Menu from '../views/pages/menu';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': Menu, // default page
  '/menu': Menu,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};
 
export default routes;