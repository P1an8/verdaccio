import React from 'react';

import { render } from '../../test/test-react-testing-library';
import Help from './Help';

describe('<Help /> component', () => {
  test('should load the component in default state', () => {
    const { container } = render(<Help />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
