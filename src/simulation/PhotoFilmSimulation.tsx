import {labelForFilmSimulation} from '@/vendors/fujifilm';
import PhotoFilmSimulationIcon from './PhotoFilmSimulationIcon';
import {FilmSimulation} from '.';
import Entity, {EntityLinkExternalProps} from '@/components/Entity';

export default function PhotoFilmSimulation({
  simulation,
  type = 'icon-last',
  badged = true,
  dim,
  countOnHover,
}: {
  simulation: FilmSimulation
  countOnHover?: number
} & EntityLinkExternalProps) {
  const { small, medium, large } = labelForFilmSimulation(simulation);

  return (
    <Entity
      label={medium}
      labelSmall={small}
      icon={<PhotoFilmSimulationIcon
        simulation={simulation}
        className="translate-y-[-1px]"
      />}
      title={`Film Simulation: ${large}`}
      type={type}
      badged={badged}
      dim={dim}
      hoverEntity={countOnHover}
    />
  );
}
