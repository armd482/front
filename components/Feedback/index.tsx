'use client';

import { useState } from 'react';

import BaseContent from './BaseContent';
import Header from './Header';
import Report from './Report';
import Suggest from './Suggest';

import Modal from '@/components/_shared/Modal';

export default function Feedback({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [category, setCategory] = useState<null | 'report' | 'suggest'>(null);
  const [isCompletedForm, setIsCompletedForm] = useState(false);

  const handleClose = () => {
    setCategory(null);
    onClose();
  };

  return (
    <Modal description='의견이나 문제점을 보내주세요.' isOpen={isOpen} title='서비스 피드백' onClose={handleClose}>
      {!category ? (
        <BaseContent onClick={setCategory} onClose={handleClose} />
      ) : (
        <div className='flex size-full flex-col'>
          <Header type={category} onClick={setCategory} onClose={handleClose} />

          <div className='flex-1 overflow-auto p-4'>
            {category === 'report' ? (
              <Report onComplete={setIsCompletedForm} onVisible={() => {}} />
            ) : (
              <Suggest onComplete={setIsCompletedForm} onVisible={() => {}} />
            )}
          </div>

          <div className='flex justify-end border-t bg-white p-5 pb-4 shadow-[0_-1px_4px_rgba(48,48,48,0.3)]'>
            <button
              className={`font-googleSans h-9 rounded px-6 text-sm transition-colors ${
                isCompletedForm ? 'bg-[#0B57D0] text-white' : 'bg-[#E4E4E4] text-[#555555]'
              }`}
              disabled={!isCompletedForm}
              type='button'
            >
              보내기
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
