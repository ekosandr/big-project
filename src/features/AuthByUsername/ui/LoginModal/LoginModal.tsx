import React from 'react';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
