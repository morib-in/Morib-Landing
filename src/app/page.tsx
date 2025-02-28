// NOTE: 프레이머 모션 테스트를 위한 임시 클라이언트 컴포넌트 명시
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import DetailSection from '@/components/DetailSection';
import { DETAIL_CONTENTS } from '@/constants/contents';

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-bg-00 pt-[7.7rem]">
      <header className="fixed left-0 right-0 top-0 z-10 flex w-100 h-[7.7rem] px-[3.2rem] py-[2rem] items-center justify-between">
        <div className="flex items-center gap-[7px]">
          <Image src="/logo_icon.svg" alt="logo" width={30} height={29}/>
          <Image src="/logo_name.svg" alt="logo" width={88} height={37}/>
        </div>
        <button className="flex items-center justify-center gap-[0.8rem] px-[1.6rem] py-[0.8rem] rounded-[0.6rem] bg-white text-gray-01 body-bold-16 hover:bg-mint-01">
        다운로드
        </button>
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

      <div className="flex flex-col gap-[6rem]">
        {DETAIL_CONTENTS.map((content) => (
          <DetailSection contents={content} key={content.imgSrc} />
        ))}
      </div>

      <section>
        <h2>
          오늘의 할 일을
          <br /> 체계적으로
        </h2>

        <p>
          할 일을 등록하고 몰입 시간을 확인하세요.
          <br />
          한눈에 보는 나의 할 일 현황으로
          <br />
          오늘 해야 할 일을 놓치지 않고 관리할 수 있어요.
        </p>

        <div className="h-[790px] w-[1073px] bg-mint-02" />
      </section>
      <section>
        <h1>
          온전한
          <br />
          몰입 시간 기록
        </h1>
        <p>
          나의 온전한 몰입 시간을 기록해보세요.
          <br />
          허용되지 않은 서비스에 접근하면 타이머가 멈추어
          <br />
          몰입 시간을 정확하게 측정할 수 있어요.
        </p>
      </section>
      <section>
        <h1>
          함께일 때 더<br />
          깊어지는 몰입
        </h1>
        <p>
          더 깊은 몰입의 순간을 만들어보세요.
          <br />
          실시간으로 친구들과 몰입 현황을 공유하여
          <br />
          서로의 성장이 동기가 될 수 있어요.
        </p>
      </section>
      <section>
        <h1>지금 바로 몰입하세요</h1>
        <button type="button">모립 다운로드 하기</button>
      </section>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start"></main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
      </footer>
    </div>
  );
}
