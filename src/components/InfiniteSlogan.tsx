import Image from 'next/image';

interface Props {
  className?: string;
}

const InfiniteSlogan = ({ className }: Props) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="animate-slogan inline-flex whitespace-nowrap">
        <Image src="/Layer_1.svg" alt="slogan" width={926} height={49} className="block" />
        <Image src="/Layer_1.svg" alt="slogan" width={926} height={49} className="block" />
        <Image src="/Layer_1.svg" alt="slogan" width={926} height={49} className="block" />
        <Image src="/Layer_1.svg" alt="slogan" width={926} height={49} className="block" />
      </div>
    </div>
  );
};

export default InfiniteSlogan;
