import './Button.scss';


/**
 * Here we are using [style-loader, css-loader, sass-loader] to resolve Image path in JS file
 * 
 * Webpack :
 *  css-loader : extract all css files and resolve path
 * 
 *  style-loader : extracted css content will be place in index.html
 * 
 *  sass-loader : it will preprocess all scss files and css files
 */


class HelloWorldButton {

    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Button with scss import';
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Button with scss import';
            p.classList.add('btn-text');
            body.appendChild(p);
        }
        button.classList.add('btn');
        body.appendChild(button);
    }
}

export default HelloWorldButton;