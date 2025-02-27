// NOTE: 프레이머 모션 테스트를 위한 임시 클라이언트 컴포넌트 명시
'use client';

import { motion } from 'motion/react';
import DetailSection from '@/components/DetailSection';
import InfiniteSlogan from '@/components/InfiniteSlogan';
import { DETAIL_CONTENTS } from '@/constants/contents';

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-bg-00 pt-[7.7rem]">
      <header className="fixed left-0 right-0 top-0 z-10 flex h-[7.7rem] items-center justify-between">
        <div>로고</div>
        <button>다운로드</button>
      </header>
      <section className="h-screen w-full bg-landing">
        <h1>
          당신을 위한
          <br />
          온전한 몰입 공간
        </h1>
        <p>시간을 소중히 여긴다면, 모립과 함께 집중해보세요.</p>
        <button type="button">모립 다운로드 하기</button>
        {/*
        NOTE: 프레이머 모션 예시, 프레이머 모션은 클라이언트 컴포넌트 내부에서만 사용가능합니다.
        */}
        <motion.div
          className="h-[400px] w-[400px] bg-white"
          initial={{ opacity: 0, y: '90vh' }} // 초기 상태: 투명하고 아래 위치
          whileInView={{ opacity: 1, y: 0 }} // 뷰포트 진입 시: 불투명해지며 원래 위치로 이동
          transition={{ duration: 1 }} // 애니메이션 지속 시간 0.5초
          viewport={{ once: true }} // 한 번만 애니메이션 실행
        />
      </section>

      <InfiniteSlogan className="pb-[4.8rem] pt-[1.8rem] sm:py-[6rem]" />
      <div className="flex flex-col gap-[6rem]">
        {DETAIL_CONTENTS.map((content) => (
          <DetailSection contents={content} key={content.imgSrc} />
        ))}
      </div>
      <InfiniteSlogan className="pb-[4.8rem] pt-[1.8rem] sm:py-[6rem]" />

      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start"></main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  );
}
