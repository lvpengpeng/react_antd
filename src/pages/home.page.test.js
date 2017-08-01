/**
 * Created by tyliu on 2017/4/5.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.page';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
});
