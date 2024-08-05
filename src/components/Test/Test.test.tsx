import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Test from '.';

describe('Test', () => {
    it('should render the test text', () => {
        /** Render the test component */
        const componentContent = {
            test: 'test',
            somethingElse: 'test'
        };

        render(<Test {...componentContent} />);

        expect(screen.getByTitle('test')).toHaveTextContent('test');
    });
});