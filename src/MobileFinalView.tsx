import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MobileFinalViewProps } from './MobileFinal.types';

const NativeView: React.ComponentType<MobileFinalViewProps> =
  requireNativeViewManager('MobileFinal');

export default function MobileFinalView(props: MobileFinalViewProps) {
  return <NativeView {...props} />;
}
