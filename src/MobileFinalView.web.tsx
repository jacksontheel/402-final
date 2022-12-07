import * as React from 'react';

import { MobileFinalViewProps } from './MobileFinal.types';

export default function MobileFinalView(props: MobileFinalViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
