import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MobileFinal.web.ts
// and on native platforms to MobileFinal.ts
import MobileFinalModule from './MobileFinalModule';
import MobileFinalView from './MobileFinalView';
import { ChangeEventPayload, MobileFinalViewProps } from './MobileFinal.types';

// Get the native constant value.
export const PI = MobileFinalModule.PI;

export function hello(): string {
  return MobileFinalModule.hello();
}

export async function setValueAsync(value: string) {
  return await MobileFinalModule.setValueAsync(value);
}

const emitter = new EventEmitter(MobileFinalModule ?? NativeModulesProxy.MobileFinal);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MobileFinalView, MobileFinalViewProps, ChangeEventPayload };
