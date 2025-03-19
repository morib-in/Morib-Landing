'use client';

import MediaBlock from '@/components/MediaBlock';
import DetailContent from '@/components/DetailContent';
import useActiveSection from '@/hooks/useActiveSection';

interface SectionDetails {
  dataOrder: number;
  title: string;
  description: string;
  imgSrc: string;
  imgDescription: string;
}

interface DetailContents {
  section1: SectionDetails;
  section2: SectionDetails;
  section3: SectionDetails;
  section4: SectionDetails;
}

const DetailSection = ({ detailContents }: { detailContents: DetailContents }) => {
  const activeSection = useActiveSection();
  return (
    <div className="flex w-full items-center justify-center">
      <div className="lg:grid lg:grid-cols-12">
        {/* 왼쪽 텍스트 & 모바일 이미지 */}
        <div className="flex flex-col gap-[4.8rem] lg:col-span-6">
          <DetailContent sectionDetails={detailContents.section1} />
          <DetailContent sectionDetails={detailContents.section2} />
          <DetailContent sectionDetails={detailContents.section3} />
          <DetailContent sectionDetails={detailContents.section4} />
        </div>

        {/* 오른쪽 데스크탑용 이미지 */}
        <div className="right-0 top-[7.7rem] col-span-6 col-start-7 w-full lg:sticky lg:h-[calc(100dvh-7.7rem)]">
          <div className="relative h-full w-full">
            <MediaBlock
              sectionDetails={detailContents.section1}
              isActive={detailContents.section1.dataOrder === activeSection}
            />
            <MediaBlock
              sectionDetails={detailContents.section2}
              isActive={detailContents.section2.dataOrder === activeSection}
            />
            <MediaBlock
              sectionDetails={detailContents.section3}
              isActive={detailContents.section3.dataOrder === activeSection}
            />
            <MediaBlock
              sectionDetails={detailContents.section4}
              isActive={detailContents.section4.dataOrder === activeSection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
