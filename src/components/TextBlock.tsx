interface Props {
  title: string;
  description: string;
  order: number;
}

const TextBlock = ({ title, description, order }: Props) => {
  return (
    <div
      className="flex flex-col justify-center px-[2.4rem] sm:mb-[6rem] sm:h-[calc(100vh-7.7rem)] sm:px-0 sm:pl-[24rem]"
      data-order={order}>
      <h2 className="mb-[0.8rem] whitespace-pre-line title-bold-24 sm:mb-[4rem] sm:title-bold-56">{title}</h2>
      <p className="whitespace-pre-line text-gray-05 detail-reg-14 sm:body-med-24">{description}</p>
    </div>
  );
};

export default TextBlock;
