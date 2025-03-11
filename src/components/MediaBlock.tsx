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
    <motion.div
      className="hidden h-full w-full items-center justify-center md:absolute md:flex"
      style={{
        opacity: isActive ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}>
      <Image
        src={imgSrc}
        alt={imgDescription}
        width={1073}
        height={789}
        className="rounded-[2rem] md:my-[14.5rem] md:ml-[12rem]"
      />
    </motion.div>
  );
};

export default MediaBlock;
