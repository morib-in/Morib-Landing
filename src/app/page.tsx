// NOTE: 프레이머 모션 테스트를 위한 임시 클라이언트 컴포넌트 명시
'use client';


import DetailSection from '@/components/DetailSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfiniteSlogan from '@/components/InfiniteSlogan';
import { DETAIL_CONTENTS } from '@/constants/contents';
import { FOOTER_CONTENT } from '@/constants/contents';
import FinalSection from '@/components/FinalSection';
import FirstSection from '@/components/FirstSection';

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-bg-00 pt-[7.7rem]">
      <Header />

      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <FirstSection />

        <InfiniteSlogan className="pb-[4.8rem] pt-[1.8rem] sm:py-[6rem]" />
        <div className="flex flex-col gap-[6rem]">
          {DETAIL_CONTENTS.map((content) => (
            <DetailSection contents={content} key={content.imgSrc} />
          ))}
        </div>
        <InfiniteSlogan className="pb-[4.8rem] pt-[1.8rem] sm:py-[6rem]" />
        <FinalSection />
      </main>
      <Footer contents={FOOTER_CONTENT} />
    </div>
  );
}
