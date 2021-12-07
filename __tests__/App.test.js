import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import App from '~/';

test('renders correctly', () => {
  render(<App />);
});