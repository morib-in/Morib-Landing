'use client';

import Image from 'next/image';

interface Props {
  className?: string;
}

const InfiniteSlogan = ({ className }: Props) => {
  const images = Array(4).fill({
    src: '/slogan.svg',
    alt: 'A WORKSPACE FOR IMMERSION - Morib slogan',
    width: 926,
    height: 49,
  });
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <style jsx>{`
        .slider {
          display: flex;
          will-change: transform;
        }

        @media (max-width: 639px) {
          .slider {
            animation: slideMobile 5s linear infinite;
          }

          @keyframes slideMobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 0.5rem));
            }
          }
        }

        @media (min-width: 640px) {
          .slider {
            animation: slideDesktop 3s linear infinite;
          }

          @keyframes slideDesktop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 2.7rem));
            }
          }
        }
      `}</style>
      <div className="slider flex gap-[0.5rem] sm:gap-[2.7rem]">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="block w-1/2"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlogan;
