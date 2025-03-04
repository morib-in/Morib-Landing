import Image from 'next/image';
import DownloadBuutton from './DownloadBuutton';

const FinalSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[4.8rem] py-[4rem] sm:gap-[6rem]">
      <div className="flex flex-col items-center justify-center gap-[2rem]">
        <h2 className="sm:title-bold-72 title-bold-32">지금 바로 몰입하세요</h2>
        <DownloadBuutton />
      </div>
      <Image src="/section6.png" alt="섹션6 이미지" width={1440} height={1080} />
    </section>
  );
};

export default FinalSection;
