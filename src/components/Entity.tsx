import {ReactNode} from 'react';
import Badge from './Badge';
import {cc} from '@/utility/css';

export interface EntityLinkExternalProps {
  type?: 'icon-last' | 'icon-first' | 'icon-only' | 'text-only'
  badged?: boolean
  dim?: boolean
}

export default function Entity({
  label,
  labelSmall,
  icon,
  title,
  type = 'icon-first',
  badged,
  hoverEntity,
  dim,
}: {
  label: ReactNode
  labelSmall?: ReactNode
  icon?: ReactNode
  title?: string
  hoverEntity?: ReactNode
} & EntityLinkExternalProps) {
  const renderLabel = () => <>
    <span className="xs:hidden">
      {labelSmall ?? label}
    </span>
    <span className="hidden xs:inline-block">
      {label}
    </span>
  </>;

  return (
    <span className="group inline-flex items-center gap-2 overflow-hidden">
      <div
        title={title}
        className={cc(
          'inline-flex gap-[0.23rem] text-main',
          !badged && 'text-main',
          dim && 'text-dim',
        )}
      >
        {type !== 'icon-only' && <>
          {badged
            ? <span className="h-6 inline-flex items-center">
              <Badge type="secondary" uppercase>
                {renderLabel()}
              </Badge>
            </span>
            : <span className="uppercase">
              {renderLabel()}
            </span>}
        </>}
        {icon && type !== 'text-only' &&
          <span className={cc(
            'flex-shrink-0',
            'text-gray-600 inline-flex min-w-[0.9rem]',
            type === 'icon-first' && 'order-first',
            badged && 'translate-y-[4px]',
          )}>
            {icon}
          </span>}
      </div>
      {hoverEntity !== undefined &&
        <span className="hidden group-hover:inline">
          {hoverEntity}
        </span>}
    </span>
  );
}
