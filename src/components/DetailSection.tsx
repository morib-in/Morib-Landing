'use client';

import TextBlock from '@/components/TextBlock';
import MediaBlock from '@/components/MediaBlock';
import Image from 'next/image';
import useActiveSection from '@/hooks/useActiveSection';

interface Contents {
  contents: {
    title: string;
    description: string;
    imgSrc: string;
    imgDescription: string;
  }[];
}

const DetailSection = ({ contents }: Contents) => {
  const activeSection = useActiveSection();

  return (
    <div className="flex w-full items-center justify-center">
      <div className="sm:grid sm:grid-cols-12">
        <div className="flex flex-col gap-[4.8rem] sm:col-span-6">
          {contents.map((content, index) => (
            <div key={index} className="px-[2.4rem] py-[2rem] sm:p-0">
              <TextBlock key={index} title={content.title} description={content.description} order={index} />
              {/* 모바일용 이미지 */}
              <div className="pt-[2.4rem] sm:hidden">
                <Image
                  src={content.imgSrc}
                  alt={content.imgDescription}
                  width={1073}
                  height={789}
                  className="rounded-[2rem]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="right-0 top-[7.7rem] col-span-6 col-start-7 sm:sticky sm:h-[calc(100dvh-7.7rem)]">
          {contents.map((content, index) => (
            <MediaBlock
              key={index}
              imgSrc={content.imgSrc}
              imgDescription={content.imgDescription}
              isActive={activeSection === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
