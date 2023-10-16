import ClientOnlyPortal from '@/utils/ClientOnlyPortal';
import { MouseEvent, useEffect } from 'react';
import Close from '../../../../public/svg/close.svg';

import IconButton from '@/components/button/IconButton';
import d from '@/data/modal.json';
import { ModalProps } from './Modal.props';

const Modal = ({ children, ModalClose, setIsModalOpen }: ModalProps) => {
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      ModalClose();
    }
  };
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        ModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown as unknown as EventListener);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown as unknown as EventListener);
    };
  }, [ModalClose]);
  return (
    <ClientOnlyPortal selector="#modal">
      <div
        onClick={handleBackdropClick}
        className="!bg-gray_transparent !fixed !inset-0 !z-[10000] flex  justify-center overflow-y-scroll items-start py-10"
      >
        <div className="p-6 md:p-9 bg-white  relative">
          <IconButton
            type="button"
            onClick={ModalClose}
            label={d.button.ariaLabel.close}
            className="absolute  top-1 right-0 md:top-2 md:right-2"
          >
            <Close className="h-8 w-8 text-white fill-dark" />
          </IconButton>

          {children}
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
