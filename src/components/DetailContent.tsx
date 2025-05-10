import Image from 'next/image';

interface SectionDetails {
  dataOrder: number;
  title: string;
  description: string;
  imgSrc: string;
  imgDescription: string;
}

type DetailContentProps = {
  sectionDetails: SectionDetails;
};

const DetailContent = ({ sectionDetails }: DetailContentProps) => {
  return (
    <div className="flex flex-col lg:gap-[2.4rem]">
      <div
        className="flex flex-col justify-center px-[2.4rem] lg:mb-[6rem] lg:mr-[15.3rem] lg:h-[calc(100dvh-7.7rem)] lg:px-0 lg:pl-[24rem]"
        data-order={sectionDetails.dataOrder}>
        <h2 className="mb-[0.8rem] whitespace-pre-line title-bold-24 lg:mb-[4rem] lg:title-bold-56">
          {sectionDetails.title}
        </h2>
        <p className="whitespace-pre-line text-gray-05 detail-reg-14 lg:body-med-24">{sectionDetails.description}</p>
      </div>
      {/* 모바일 전용 이미지 */}
      <div className="pt-[2.4rem] lg:hidden">
        <Image
          src={sectionDetails.imgSrc}
          alt={sectionDetails.imgDescription}
          width={1073}
          height={789}
          className="rounded-[0.4rem] px-[2.4rem] pb-[2rem]"
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default DetailContent;
