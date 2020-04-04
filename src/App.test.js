import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import NavigationBarComponent from './components/NavigationBarComponent/NavigationBarComponent';

test('renders learn react link', () => {

  const component = render.create(
    <NavigationBarComponent></NavigationBarComponent>
  )

  // expect(na)

  // const { navigationComponent } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
