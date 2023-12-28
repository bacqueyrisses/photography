'use client';
import {toastSuccess} from '@/toast';
import {TbPhotoShare} from 'react-icons/tb';

export default function ShareButton({path}: {path: string}) {
  return (

      <TbPhotoShare type={'button'} className={"cursor-pointer text-dim hover:text-black transition-all"} size={14} onClick={() => {
        navigator.clipboard.writeText(path);
        toastSuccess('Link to photo copied')
      }}/>


  )
}
