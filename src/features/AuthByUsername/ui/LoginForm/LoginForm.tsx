import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/ui/Button';
import Input from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

const LoginForm = memo(() => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={cls.LoginForm}>
            <Text text={t('Форма авторизации')} theme={TextTheme.ERROR} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                type="text"
                onChange={onChangeUsername}
                value={username}
                placeholder={t('Введите логин')}
            />
            <Input
                className={cls.input}
                type="text"
                onChange={onChangePassword}
                value={password}
                placeholder={t('Введите пароль')}
            />
            <Button
                disabled={isLoading}
                className={classNames(cls.loginBtn, {}, [])}
                theme={ThemeButton.OUTLINE}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;
