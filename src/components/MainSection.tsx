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
        <p className="text-gray-05 detail-semibold-14 sm:body-med-32">{MAIN_SECTION_CONTENT.description}</p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-[1.4rem] bg-landing px-[2.4rem] pb-[2.9rem] sm:gap-[8rem] sm:px-[24.2rem] sm:pb-[17.4rem]">
        <DownloadButton />
        <div
          className="relative h-[18.9rem] w-[32.7rem] bg-contain bg-center bg-no-repeat sm:h-[79rem] sm:w-[140rem] sm:bg-cover"
          style={{ backgroundImage: "url('/mainsection.svg')" }}>
          <motion.div
            className="absolute right-[8rem] top-[7.9rem] sm:left-[55.4rem] sm:top-[34.5rem]"
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
            className="absolute right-[-0.5rem] top-[1rem] sm:right-[-3rem] sm:top-[2rem]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 }}>
            <Image
              src="/today_task.svg"
              alt="오늘의 태스크 이미지"
              width={285}
              height={773}
              className="h-[19rem] w-auto sm:h-[83rem] sm:w-[28.5rem]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
