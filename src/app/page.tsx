// NOTE: 프레이머 모션 테스트를 위한 임시 클라이언트 컴포넌트 명시
'use client';

import { motion } from 'motion/react';
import DetailSection from '@/components/DetailSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DETAIL_CONTENTS } from '@/constants/contents';
import { FOOTER_CONTENT } from '@/constants/contents';

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-bg-00 pt-[7.7rem]">
      <Header />
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

      <div className="flex flex-col gap-[6rem]">
        {DETAIL_CONTENTS.map((content) => (
          <DetailSection contents={content} key={content.imgSrc} />
        ))}
      </div>

      <section>
        <h1>지금 바로 몰입하세요</h1>
        <button type="button">모립 다운로드 하기</button>
      </section>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start"></main>
      <Footer contents={FOOTER_CONTENT}/>
    </div>
  );
}
