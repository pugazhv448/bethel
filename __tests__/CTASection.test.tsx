import { render, screen } from '@testing-library/react';
import CTASection from '@/components/CTASection';

describe('CTASection component', () => {
  it('renders the headline and CTA buttons', () => {
    render(<CTASection />);
    // Check for the headline text (adjust if actual headline differs)
    const headline = screen.getByRole('heading', { name: /one call away/i });
    expect(headline).toBeInTheDocument();

    // Phone CTA button
    const phoneLink = screen.getByRole('link', { name: /\+91/i });
    expect(phoneLink).toHaveAttribute('href', expect.stringContaining('tel:'));

    // Email CTA button
    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });
});
