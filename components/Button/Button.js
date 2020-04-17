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


class Button {

    // This feature will be supported on latest browsers
    buttonCssClass = 'btn';

    buttonCssClassTxt = 'btn-txt';

    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Click me to show some text';
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Hey, you have clicked!';
            p.classList.add(this.buttonCssClassTxt);
            body.appendChild(p);
        }
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default Button;