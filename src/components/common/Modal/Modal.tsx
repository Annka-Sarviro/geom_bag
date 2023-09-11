import ClientOnlyPortal from '@/utils/ClientOnlyPortal';
import { MouseEvent, useEffect } from 'react';
import Close from '../../../../public/svg/close.svg';

import IconButton from '@/components/button/IconButton';
import d from '@/data/modal.json';

const Modal = ({ children, ModalClose, setIsModalOpen }: any) => {
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
        className="!bg-gray_transparent !fixed !inset-0 !z-[10000] flex xl:items-center justify-center overflow-x-scroll items-start"
      >
        <div className="p-6 md:p-9 bg-white w-[80vw] md:max-w-[896px] relative">
          <IconButton
            type="button"
            onClick={ModalClose}
            label={d.button.ariaLabel.close}
            className="absolute top-2 right-2"
          >
            <Close className="h-8 w-8 text-white" />
          </IconButton>

          {children}
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
