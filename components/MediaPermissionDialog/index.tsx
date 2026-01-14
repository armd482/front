'use client';

import Dialog from '../_shared/Dialog';

import MediaPermissionBlocked from './MediaPermissionBlocked';
import MediaPermissionPrompt from './MediaPermissionPrompt';

import { useDeviceStore } from '@/store/useDeviceStore';

interface MediaPermissionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MediaPermissionDialog({ isOpen, onClose }: MediaPermissionDialogProps) {
  const permission = useDeviceStore((state) => state.permission);
  return (
    <Dialog
      description='장치 권한을 허용해주세요.'
      isOpen={isOpen}
      position='center'
      title='장치 권한 요청'
      onClose={onClose}
    >
      {Object.values(permission).some((state) => state !== 'granted') ? (
        <MediaPermissionPrompt />
      ) : (
        <MediaPermissionBlocked />
      )}
    </Dialog>
  );
}
