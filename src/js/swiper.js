import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
});
