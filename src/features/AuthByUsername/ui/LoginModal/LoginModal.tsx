import React, { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSucces={onClose} />
            </Suspense>
        </Modal>
    );
};

export default LoginModal;
