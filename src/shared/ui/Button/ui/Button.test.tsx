import { render, screen } from '@testing-library/react';
import React from 'react';
import Button, { ThemeButton } from './Button';

describe('Button', () => {
    test('no theme', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
    test('with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    });
});
