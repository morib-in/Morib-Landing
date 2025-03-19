interface Props {
  title: string;
  description: string;
  order: number;
}

const TextBlock = ({ title, description, order }: Props) => {
  return (
    <div
      className="mr-[15.3rem] flex flex-col justify-center px-[2.4rem] md:mb-[6rem] md:h-[calc(100dvh-7.7rem)] md:px-0 md:pl-[24rem]"
      data-order={order}>
      <h2 className="mb-[0.8rem] whitespace-pre-line title-bold-24 md:mb-[4rem] md:title-bold-56">{title}</h2>
      <p className="whitespace-pre-line text-gray-05 detail-reg-14 md:body-med-24">{description}</p>
    </div>
  );
};

export default TextBlock;
