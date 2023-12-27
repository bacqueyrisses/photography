import {cc} from '@/utility/css';
import AnimateItems from '@/components/AnimateItems';
import Link from 'next/link';

export default function Header() {
  return (
    <AnimateItems
      type={'bottom'}
      distanceOffset={10}
      items={[<div
        key="nav"
        className={cc(
          'flex items-center',
          'w-full min-h-[4rem]',
          'leading-none',
        )}>
        <Link href={'/'} className="hidden xs:block">
          enzo-photography
        </Link>
      </div>]
      }
    />
  );
}
