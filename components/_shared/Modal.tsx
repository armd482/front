'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Modal({ children, className, description, isOpen, onClose, title }: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className='animate-in fade-in fixed inset-0 z-2101 bg-[rgba(128,134,139,0.5)] duration-200' />
        <Dialog.Content
          className={`animate-in slide-in-from-right fixed top-0 right-0 z-2102 h-full w-103 overflow-hidden rounded-l-lg bg-white shadow-2xl duration-300 outline-none ${className}`}
        >
          <Dialog.Title className='sr-only'>{title || 'Modal'}</Dialog.Title>
          <Dialog.Description className='sr-only'>{description || 'Modal Content'}</Dialog.Description>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
