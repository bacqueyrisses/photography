import AnimateItems from '@/components/AnimateItems';
import {Photo} from '.';
import PhotoLarge from './PhotoLarge';
import SiteGrid from '@/components/SiteGrid';
import PhotoGrid from './PhotoGrid';
import {cc} from '@/utility/css';
import PhotoLinks from './PhotoLinks';
import {Camera} from '@/camera';
import {FilmSimulation} from '@/simulation';

export default function PhotoDetailPage({
  photo,
  photos,
  photosGrid,
  tag,
  camera,
  simulation,
}: {
  photo: Photo
  photos: Photo[]
  photosGrid?: Photo[]
  tag?: string
  camera?: Camera
  simulation?: FilmSimulation
}) {
  return (
    <div>
      <AnimateItems
        className="md:mb-8"
        animateFromAppState
        items={[
          <PhotoLarge
            key={photo.id}
            photo={photo}
            primaryTag={tag}
            priority
            showCamera={!camera}
            showSimulation={!simulation}
          />,
        ]}
      />
      <SiteGrid
        sideFirstOnMobile
        contentMain={<PhotoGrid
          photos={photosGrid ?? photos}
          selectedPhoto={photo}
          tag={tag}
          animateOnFirstLoadOnly
        />}
        contentSide={<div className={cc(
          'grid grid-cols-2',
          'gap-0.5 sm:gap-1',
          'md:flex md:gap-4',
          'user-select-none',
        )}>
          <PhotoLinks {...{
            photo,
            photos,
            tag,
            camera,
            simulation,
          }} />
        </div>}
      />
    </div>
  );
}
