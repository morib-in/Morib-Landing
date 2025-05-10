import React, { useEffect, useRef } from 'react';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const ModalWrapper = ({ onClose, children }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.open) {
            dialog.showModal();
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            if (dialog && dialog.open) {
                dialog.close();
            }
        };
    }, [onClose]);

    const handleClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = dialogRef.current;
        if (dialog && e.target === dialog) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            onClick={handleClickOutside}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop:bg-black/60 rounded-xl p-0 border-none"
        >
            {children}
        </dialog>
    );
};

export default ModalWrapper;
