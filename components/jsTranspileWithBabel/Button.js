import './Button.scss';


/**
 * Here we are using bable-loader to support Class Propertie feature 
 * 
 * Webpack :
 *  babel-loader : will transpile JS to es5 supported or any version
 * 
 *  babel-plugin-transform-class-properties : used to add polifill by babel
 * 
 */


class HelloWorldButton {

    // This feature will be supported on latest browsers
    buttonCssClass = 'btn';

    buttonCssClassTxt = 'btn-txt';

    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Babel support for JS features';
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Babel support for JS features';
            p.classList.add(this.buttonCssClassTxt);
            body.appendChild(p);
        }
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default HelloWorldButton;