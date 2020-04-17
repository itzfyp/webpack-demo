import './Heading.scss';




class Heading {

    // This feature will be supported on latest browsers
    headingTxt = 'heading';

    render() {
        const heading = document.createElement('h1');
        const body = document.querySelector('body');
        heading.innerHTML = 'Webpack is awesome';
        heading.classList.add(this.headingTxt);
        body.appendChild(heading);
    }
}

export default Heading;