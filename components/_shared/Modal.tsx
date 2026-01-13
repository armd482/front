'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: 'center' | 'right';
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Modal({ children, className, description, isOpen, onClose, position, title }: ModalProps) {
  const cn = {
    center: `
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md max-h-[85vh] rounded-lg 
      animate-in fade-in zoom-in-95 
      data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95
    `,
    right: `
      fixed top-0 right-0 z-2102 h-full w-103 rounded-l-lg
      animate-in slide-in-from-right 
      data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right
    `,
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className='animate-in fade-in fixed inset-0 z-2101 bg-[rgba(128,134,139,0.5)] duration-200' />
        <Dialog.Content
          className={`animate-in fixed z-2102 overflow-hidden bg-white shadow-2xl duration-300 outline-none ${cn[position]} ${className}`}
        >
          <Dialog.Title className='sr-only'>{title || 'Modal'}</Dialog.Title>
          <Dialog.Description className='sr-only'>{description || 'Modal Content'}</Dialog.Description>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
