import { create } from 'zustand';

import { DeviceType, DeviceEnableType, DeviceKindType } from '@/types/deviceType';

interface DeviceState {
  device: Record<DeviceType, MediaDeviceInfo | null>;
  deviceEnable: DeviceEnableType;

  deviceList: Record<DeviceType, MediaDeviceInfo[]>;

  changeDevice: (type: DeviceType, value: MediaDeviceInfo) => void;
  changeDeviceList: (type: DeviceType, value: MediaDeviceInfo[]) => void;
  changeDeviceEnalbe: (type: DeviceKindType, value: boolean) => void;
}
export const useDeviceStore = create<DeviceState>((set) => ({
  changeDevice: (type, value) => set((state) => ({ device: { ...state.device, [type]: value } })),
  changeDeviceEnalbe: (type, value) => set((state) => ({ deviceEnable: { ...state.deviceEnable, [type]: value } })),
  changeDeviceList: (type, value) => set((state) => ({ deviceList: { ...state.deviceList, [type]: value } })),

  device: {
    audioInput: null,
    audioOutput: null,
    videoInput: null,
  },
  deviceEnable: {
    audio: true,
    video: true,
  },
  deviceList: {
    audioInput: [],
    audioOutput: [],
    videoInput: [],
  },
}));
