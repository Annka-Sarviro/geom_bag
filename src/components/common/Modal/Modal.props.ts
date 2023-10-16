import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  ModalClose: () => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}
