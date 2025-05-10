'use client';

import Image from 'next/image';

interface DownloadServiceButtonProps {
  iconSrc: string;
  iconAlt: string;
  children: React.ReactNode;
  onClick?: () => void;
  downloadUrl?: string;
  ariaLabel: string;
}

const DownloadServiceButton = ({ iconSrc, iconAlt, children, onClick, downloadUrl }: DownloadServiceButtonProps) => {
  const buttonStyle =
    'flex px-[1.5rem] py-[2rem] items-center gap-[0.9rem] rounded-[8px] bg-gray-bg-02 text-center text-white subhead-semibold-20 hover:bg-gray-bg-03';

  if (downloadUrl) {
    return (
      <a href={downloadUrl} download className="focus:outline-none">
        <button type="button" className={buttonStyle}>
          <Image src={iconSrc} alt={iconAlt} width={24} height={24} />
          {children}
        </button>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonStyle}>
      <Image src={iconSrc} alt={iconAlt} width={24} height={24} />
      {children}
    </button>
  );
};

export default DownloadServiceButton;
