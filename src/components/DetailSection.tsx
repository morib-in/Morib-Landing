import TextBlock from '@/components/TextBlock';
import MediaBlock from '@/components/MediaBlock';

interface Contents {
  contents: {
    title: string;
    description: string;
    imgSrc: string;
    imgDescription: string;
  };
}

const DetailSection = ({ contents }: Contents) => {
  return (
    <div className="flex w-full flex-col gap-[2rem] pl-0 sm:flex-row sm:pl-[24rem]">
      <TextBlock title={contents.title} description={contents.description} />
      <MediaBlock imgSrc={contents.imgSrc} imgDescription={contents.imgDescription} />
    </div>
  );
};

export default DetailSection;
