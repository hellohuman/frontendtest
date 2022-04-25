import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Heading renders with correct text', () => {
    render(<Header />);
    const heading = screen.getByText(/John Johnsons Cruisey Movie Monday/i);
    expect(heading).toBeInTheDocument();
})

/* More tests like this could be added for this and the other components.
   Including building mocked responses to graphql requests
 */
