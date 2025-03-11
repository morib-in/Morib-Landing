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
      <div className="w-full md:grid md:grid-cols-12">
        <div className="flex flex-col gap-[4.8rem] md:col-span-6">
          {contents.map((content, index) => (
            <div key={index} className="px-[2.4rem] py-[2rem] md:flex md:gap-[2rem] md:p-0">
              <TextBlock title={content.title} description={content.description} order={index} />
              {/* 모바일용 이미지 */}
              <div className="pt-[2.4rem] md:hidden">
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
        <div className="right-0 top-[7.7rem] col-span-6 col-start-7 w-full md:sticky md:h-[calc(100dvh-7.7rem)]">
          <div className="relative h-full w-full">
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
    </div>
  );
};

export default DetailSection;
