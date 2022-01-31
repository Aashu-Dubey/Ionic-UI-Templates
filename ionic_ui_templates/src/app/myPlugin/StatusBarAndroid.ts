import { registerPlugin } from '@capacitor/core';

export interface StatusBarPlugin {
  getHeight(): Promise<{ height: number }>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const StatusBarAndroid = registerPlugin<StatusBarPlugin>('StatusBarAndroid');

export default StatusBarAndroid;
