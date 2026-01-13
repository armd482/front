import { create } from 'zustand';

import { Alert } from '@/types/components';

interface AlertState {
  alerts: Alert[];
  addAlert: (message: string, duration?: number) => void;
  removeAlert: (id: number) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  addAlert: (message, duration = 4000) => {
    const id = Date.now();
    set((state) => ({ alerts: [...state.alerts, { id, message }] }));

    setTimeout(() => {
      set((state) => ({ alerts: state.alerts.filter((a) => a.id !== id) }));
    }, duration);
  },
  alerts: [],
  removeAlert: (id) => set((state) => ({ alerts: state.alerts.filter((a) => a.id !== id) })),
}));
