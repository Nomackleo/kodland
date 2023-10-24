import { loadComponentContent } from './componentLoader.js';
import hamburguerMenu from './hamburguer.js';
// Cargar contenido de los componentes
loadComponentContent('header', 'header-content');
loadComponentContent('main', 'main-content');
loadComponentContent('footer', 'footer-content');

document.addEventListener('DOMContentLoaded', (e => {
  hamburguerMenu('.menu-btn', '.menu')
}))

console.log('Hello');
