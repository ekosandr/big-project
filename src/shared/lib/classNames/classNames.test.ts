import { classNames } from './classNames';

describe('classNames', () => {
    test('classNames 1', () => {
        expect(classNames('class1', { class2: true }, ['1', '2'])).toBe(
            'class1 1 2 class2',
        );
    });
    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});
