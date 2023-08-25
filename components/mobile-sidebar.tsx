'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';

type Props = {};

function MobileSidebar({}: Props) {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
