import '@testing-library/jest-dom';
import { screen, render, cleanup } from '@testing-library/react';
import Link, { LinkProps } from '.';

describe('Link', () => {
    let componentContent: LinkProps;

    /** Render the component before each test */
    beforeEach(() => {
        componentContent = {
            text: 'test',
            href: 'https://test.com',
        }

        render(<Link {...componentContent} />);
    });
    /** Cleanup the DOM after each test */
    afterEach(cleanup);

    it('should render an element for each character in the provided string', () => {
        componentContent.text.split('').forEach((char, index) => {
            expect(screen.getByTestId(`link-char-${char}-${index}-test`)).toBeInTheDocument();
        })
    });

    it('should navigate to the provided URL when clicked', () => {
        expect(screen.getByTestId('link-container-test')).toHaveAttribute('href', componentContent.href);
    });

    it('should open the link in a new tab if internal is false', () => {
        expect(screen.getByTestId('link-container-test')).toHaveAttribute('target', '_blank');
    });

    it('should open the link in the same tab if internal is true', () => {
        cleanup();
        render(<Link {...componentContent} internal />);
        expect(screen.getByTestId('link-container-test')).toHaveAttribute('target', '_self');
    });
});