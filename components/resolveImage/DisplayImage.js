import Kiwi from './kiwi.jpg';

/**
 * Here we are using file-loader to resolve Image path in JS file
 * 
 * Webpack will resolve the path using file-loader (.png | jpg)
 */

export default class DisplayImage {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'Kiwi';

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}