import TextBlock from '@/components/TextBlock';
import MediaBlock from '@/components/MediaBlock';

const DetailSection = () => {
  return (
    <div className="flex w-full flex-col gap-[2rem] pl-0 sm:flex-row sm:pl-[24rem]">
      <TextBlock />
      <MediaBlock />
    </div>
  );
};

export default DetailSection;
