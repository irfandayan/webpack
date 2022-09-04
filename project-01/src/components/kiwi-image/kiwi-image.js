import Kiwi from './kivi2.jpg';
import './kivi-image.scss';

class KiwiImage {
  render() {
    const img = document.createElement('img');
    img.src = Kiwi;
    img.alt = 'Kiwi';
    img.classList.add('kiwi-image');

    const bodyDomElemnet = document.querySelector('body');
    bodyDomElemnet.appendChild(img);
  }
}

export default KiwiImage;
