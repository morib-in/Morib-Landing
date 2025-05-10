'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface SectionContent {
  sectionDetails: {
    dataOrder: number;
    title: string;
    description: string;
    imgSrc: string;
    imgDescription: string;
  };
  isActive: boolean;
}

const MediaBlock = ({ sectionDetails, isActive }: SectionContent) => {
  return (
    <motion.div
      className="hidden h-full w-full items-center justify-center lg:absolute lg:flex"
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}>
      <Image
        src={sectionDetails.imgSrc}
        alt={sectionDetails.imgDescription}
        width={1073}
        height={789}
        className="rounded-[2rem] object-contain lg:my-[14.5rem]"
        unoptimized={true}
        loading="lazy"
      />
    </motion.div>
  );
};

export default MediaBlock;
