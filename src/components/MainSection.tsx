import { motion } from 'motion/react';
import DownloadButton from './DownloadButton';
import Image from 'next/image';
import { MAIN_SECTION_CONTENT } from '@/constants/contents';

const MainSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[3.2rem] pt-[6rem] sm:gap-[6rem] sm:pt-[7.5rem]">
      <div className="flex flex-col gap-[2rem]">
        <h1 className="flex flex-col items-center justify-center text-center title-bold-32 sm:title-bold-72">
          {MAIN_SECTION_CONTENT.title.main}
          <span>{MAIN_SECTION_CONTENT.title.sub}</span>
        </h1>
        <p className="sm:body-med-32 text-gray-05 detail-semibold-14">{MAIN_SECTION_CONTENT.description}</p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-[1.4rem] bg-landing px-[2.4rem] pb-[2.9rem] sm:gap-[8rem] sm:px-[24.2rem] sm:pb-[17.4rem]">
        <DownloadButton />
        <div className="relative">
          <Image src="/first.svg" alt="모립 홈 이미지" width={1436} height={830} />
          <motion.div
            className="absolute right-[10.8rem] top-[9.3rem] sm:left-[56.9rem] sm:top-[36rem]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: 0 }}>
            <Image
              className="h-[5.5rem] w-auto sm:h-[20rem]"
              src="/task_card.svg"
              alt="태스크 카드 이미지"
              width={348}
              height={118}
            />
          </motion.div>
          <motion.div
            className="absolute right-[-0.5rem] top-[1rem] sm:right-[-19rem] sm:top-[2.5rem]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 }}>
            <Image
              src="/today_task.svg"
              alt="오늘의 태스크 이미지"
              width={285}
              height={773}
              className="h-[22rem] w-auto sm:h-[85rem] sm:w-[60rem]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
