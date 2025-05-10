'use client';

import { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import ModalWindowDownload from './ModalWindowDownload';
import DownloadServiceButton from './DownloadServiceButton';

interface DownloadService {
  title: string;
  resourceSrc: string;
}

interface DownloadServiceSectionProps {
  downloadServices: DownloadService[];
}

const DownloadServiceSection = ({ downloadServices }: DownloadServiceSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);  

  return (
    <>
      <div className="flex w-[108.4rem] justify-center items-start content-start gap-x-[1.5rem] gap-y-[1.6rem] flex-wrap">        
        {downloadServices.map((service, index) => (
          <DownloadServiceButton
            key={index}
            iconSrc="/logo_apple.svg"
            iconAlt="애플 로고 아이콘"
            downloadUrl={service.resourceSrc}
            ariaLabel={`${service.title} 다운로드`}
          >
            {service.title}
          </DownloadServiceButton>
        ))}
        
        <DownloadServiceButton
          iconSrc="/logo_window.svg"
          iconAlt="윈도우 로고 아이콘"
          onClick={handleModalOpen}
          ariaLabel="윈도우 다운로드 알림"
        >
          Window용 다운로드 알림 받기
        </DownloadServiceButton>
      </div>
      
      {isModalOpen &&       
      <ModalWrapper onClose={handleModalClose}>
        <ModalWindowDownload />
      </ModalWrapper>
      }
    </>
  );
};

export default DownloadServiceSection;