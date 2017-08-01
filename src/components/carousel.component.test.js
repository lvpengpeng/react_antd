import React from 'react';
import ReactDOM from 'react-dom';
import Carousels from './carousel.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Carousel />, div);
});