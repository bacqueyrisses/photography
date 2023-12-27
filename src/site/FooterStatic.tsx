'use client';

import {cc} from '@/utility/css';
import SiteGrid from '../components/SiteGrid';
import ThemeSwitcher from '@/site/ThemeSwitcher';

export default function FooterStatic() {
  return (
    <SiteGrid
      contentMain={<div className={cc(
        'my-8',
        'flex items-center',
        'text-dim',
      )}>
        <ThemeSwitcher />
      </div>}
    />
  );
}
