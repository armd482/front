export type DeviceKindType = 'audio' | 'video';

export type DeviceType = 'audioInput' | 'videoInput' | 'audioOutput';
export type DeviceEnableType = Record<DeviceKindType, boolean>;
