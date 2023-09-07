'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

function CrispChat() {
  useEffect(() => {
    Crisp.configure('0df52ce9-3cde-4c3f-944f-95c7eb358d53');
  }, []);
  return null;
}

export default CrispChat;
