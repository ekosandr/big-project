import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    elem?: HTMLElement;
}

const Portal = ({ children, elem }: PortalProps) => {
    return createPortal(children, elem);
};

export default Portal;
