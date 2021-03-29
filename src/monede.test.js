import {render, screen} from '@testing-library/react';
import Monede from './monede';

test('under construction placeholder page', () => {
    render(<Monede/>);
    const linkElement = screen.getByText(/cryptocurrency trends aggregator/i);
    expect(linkElement).toBeInTheDocument();
});
