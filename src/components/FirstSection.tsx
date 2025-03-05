import { motion } from 'motion/react';
import DownloadButton from './DownloadButton';
import Image from 'next/image';

const FirstSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[6rem] bg-landing pt-[7.5rem]">
      <div className="flex flex-col gap-[2rem]">
        <h1 className="flex flex-col items-center justify-center text-center sm:title-bold-72">
          당신을 위한
          <span>온전한 몰입 공간</span>
        </h1>
        <p className="body-med-32 text-gray-05">시간을 소중히 여긴다면, 모립과 함께 집중해보세요.</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[8rem]">
        <DownloadButton />
        <Image className="pl-[3.6rem]" src="/first_section.svg" alt="모립 타이머 이미지" width={1436} height={830} />
        {/*
        NOTE: 프레이머 모션 예시, 프레이머 모션은 클라이언트 컴포넌트 내부에서만 사용가능합니다.
        */}
        {/* <motion.div
          className="h-[400px] w-[400px] bg-white"
          initial={{ opacity: 0, y: '90vh' }} // 초기 상태: 투명하고 아래 위치
          whileInView={{ opacity: 1, y: 0 }} // 뷰포트 진입 시: 불투명해지며 원래 위치로 이동
          transition={{ duration: 1 }} // 애니메이션 지속 시간 0.5초
          viewport={{ once: true }} // 한 번만 애니메이션 실행
        /> */}
      </div>
    </section>
  );
};

export default FirstSection;
