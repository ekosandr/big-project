import React, { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export enum ThemeInput {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type: string;
    placeholder?: string;
}

const Input: FC<InputProps> = memo((props) => {
    const { className, value, onChange, type = 'text', placeholder } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [])}>
            <input
                className={cls.input}
                onChange={onChangeHandler}
                value={value}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
});

export default Input;
