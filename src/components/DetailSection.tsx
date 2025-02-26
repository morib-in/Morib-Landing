import TextBlock from '@/components/TextBlock';
import MediaBlock from '@/components/MediaBlock';

const CONTENT = {
  title: '몰입에 필요한\n서비스를 한 곳에서',
  description:
    '작업에 필요한 서비스만 등록하세요.\n당신의 업무에 맞는 분야별 서비스 추천으로\n더 효율적인 몰입 환경을 만들 수 있어요.',
  imgSrc: '',
  imgDescription: '',
};

const DetailSection = () => {
  return (
    <div className="flex w-full flex-col gap-[2rem] pl-0 sm:flex-row sm:pl-[24rem]">
      <TextBlock title={CONTENT.title} description={CONTENT.description} />
      <MediaBlock imgSrc={CONTENT.imgSrc} imgDescription={CONTENT.imgDescription} />
    </div>
  );
};

export default DetailSection;
