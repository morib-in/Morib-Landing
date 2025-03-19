'use client';

import { motion } from 'motion/react';
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
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}>
      <Image src={imgSrc} alt={imgDescription} width={1073} height={789} className="rounded-[2rem] md:my-[14.5rem]" />
    </motion.div>
  );
};

export default MediaBlock;
