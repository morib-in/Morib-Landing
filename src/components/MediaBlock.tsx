'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  imgSrc: string;
  imgDescription: string;
  isActive?: boolean;
}

const MediaBlock = ({ imgSrc, imgDescription, isActive }: Props) => {
  return (
    <>
      {/* 모바일용 이미지 */}
      <div className="px-[2.4rem] sm:hidden">
        <Image src={imgSrc} alt={imgDescription} width={1073} height={789} className="rounded-[2rem]" />
      </div>

      <motion.div
        className="absolute flex h-full w-full items-center justify-center"
        style={{
          opacity: isActive ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}>
        <Image src={imgSrc} alt={imgDescription} width={1073} height={789} className="rounded-[2rem]" />
      </motion.div>
    </>
  );
};

export default MediaBlock;
