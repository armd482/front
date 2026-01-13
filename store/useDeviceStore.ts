import { create } from 'zustand';

import { DeviceType, DeviceEnableType, DeviceKindType, StatusType } from '@/types/deviceType';

interface DeviceState {
  device: Record<DeviceType, MediaDeviceInfo | null>;
  deviceEnable: DeviceEnableType;

  deviceList: Record<DeviceType, MediaDeviceInfo[]>;
  status: StatusType;

  stream: MediaStream | null;
  screenStream: MediaStream | null;

  changeDevice: (type: DeviceType, value: MediaDeviceInfo) => void;
  changeDeviceList: (type: DeviceType, value: MediaDeviceInfo[]) => void;
  toggleDeviceEnalbe: (type: DeviceKindType) => void;

  stopStream: () => void;
  stopScreenStream: () => void;
}
export const useDeviceStore = create<DeviceState>((set, get) => ({
  changeDevice: (type, value) => set((state) => ({ device: { ...state.device, [type]: value } })),
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
  screenStream: null,
  status: null,
  stopScreenStream: () => {
    const { screenStream } = get();
    if (!screenStream) {
      return;
    }
    screenStream.getTracks().forEach((track) => track.stop());
    set({ screenStream: null });
  },

  stopStream: () => {
    const { stream } = get();
    if (!stream) {
      return;
    }
    stream.getTracks().forEach((track) => track.stop());
    set({ stream: null });
  },

  stream: null,

  toggleDeviceEnalbe: (type) =>
    set((state) => ({ deviceEnable: { ...state.deviceEnable, [type]: !state.deviceEnable[type] } })),
}));
