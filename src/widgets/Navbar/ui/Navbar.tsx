import { getUserAuthData, userActions } from 'entities/User';
import LoginModal from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    className={classNames(cls.links, {}, [])}
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onLogOut}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={classNames(cls.links, {}, [])}
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </div>
    );
};
