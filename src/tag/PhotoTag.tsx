import {FaTag} from 'react-icons/fa';
import {formatTag} from '.';
import Entity, {EntityLinkExternalProps} from '@/components/Entity';

export default function PhotoTag({
  tag,
  type,
  badged,
  dim,
  countOnHover,
}: {
  tag: string
  countOnHover?: number
} & EntityLinkExternalProps) {
  return (
    <Entity
      label={formatTag(tag)}
      icon={<FaTag
        size={11}
        className="text-icon translate-y-[5px]"
      />}
      type={type}
      badged={badged}
      dim={dim}
      hoverEntity={countOnHover}
    />
  );
}
