import { render, screen } from '@testing-library/react';
import Monede from './monede';

test('renders learn react link', () => {
  render(<Monede />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
