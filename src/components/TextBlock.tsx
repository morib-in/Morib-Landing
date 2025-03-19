interface Props {
  title: string;
  description: string;
  order: number;
}

const TextBlock = ({ title, description, order }: Props) => {
  return (
    <div
      className="mr-[15.3rem] flex flex-col justify-center px-[2.4rem] lg:mb-[6rem] lg:h-[calc(100dvh-7.7rem)] lg:px-0 lg:pl-[24rem]"
      data-order={order}>
      <h2 className="mb-[0.8rem] whitespace-pre-line title-bold-24 lg:mb-[4rem] lg:title-bold-56">{title}</h2>
      <p className="whitespace-pre-line text-gray-05 detail-reg-14 lg:body-med-24">{description}</p>
    </div>
  );
};

export default TextBlock;
