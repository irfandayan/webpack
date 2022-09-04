import Kivi from './kivi.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'Kivi';
  img.width = 300;
  img.src = Kivi;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
