import Image from 'next/image';
import DownloadButton from './DownloadButton';
import { FINAL_SECTION_CONTENT } from '@/constants/contents';

const FinalSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[4.8rem] sm:gap-[6rem] sm:py-[4rem]">
      <div className="flex flex-col items-center justify-center gap-[2rem]">
        <h2 className="title-bold-32 sm:title-bold-72">{FINAL_SECTION_CONTENT.title}</h2>
        <DownloadButton />
      </div>
      <Image src="/section6.svg" alt="모립 타이머 이미지" width={1440} height={1080} />
    </section>
  );
};

export default FinalSection;
