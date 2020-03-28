import React, { FC } from 'react';
import { hydrate } from 'react-dom';
import Home from '../../components/Home';

const render = (Comp: FC) => {
  hydrate(<Comp/>, document.querySelector('main'));
};

render(Home);

if (module.hot) {
  module.hot.accept('../../components/Home', () => {
    console.log('module.hot.accept');
    render(Home);
  })
}
