import Image from 'next/image';

interface Props {
  imgSrc: string;
  imgDescription: string;
}

const MediaBlock = ({ imgSrc, imgDescription }: Props) => {
  return (
    <div className="px-[2.4rem] sm:py-[14.5rem] sm:pl-[12rem] sm:pr-[0px]">
      <Image src={imgSrc} alt={imgDescription} width={1073} height={789} className="rounded-[2rem]" />
    </div>
  );
};

export default MediaBlock;
