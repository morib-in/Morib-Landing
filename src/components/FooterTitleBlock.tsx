'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FOOTER_CONTENT } from '@/constants/contents';
import { BUTTON_DOWNLOAD_TEXT } from '@/constants/contents';
import ModalWrapper from './ModalWrapper';
import ModalMobileDownload from './ModalMobileDownload';

const FooterTitleBlock = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);  
  
    const router = useRouter();
  
    const handleClickDownload= () => {
      if (window.innerWidth <= 768) {
        handleModalOpen();
      } else {
        router.push('/download');
      }
    };

  return (
    <div className="flex flex-col items-start gap-[4rem]">
      <div className="flex flex-col items-start gap-[1.3rem]">
        <Image src="/logo_name.svg" alt="모립 로고 사진" width={125} height={52}/>
          <span className="text-gray-05 subhead-med-18">
            {FOOTER_CONTENT.title_text}
          </span>  
      </div>
      <button type="button" onClick={handleClickDownload} className="flex justify-center items-center gap-[0.8rem] px-[1.6rem] py-[0.8rem] rounded-[0.6rem] bg-gray-bg-04 text-white body-bold-16">
          {BUTTON_DOWNLOAD_TEXT}
      </button>
      {isModalOpen && (
        <ModalWrapper onClose={handleModalClose}>
            <ModalMobileDownload onClose={handleModalClose}/>
        </ModalWrapper>
        )}
    </div>
  );
};
export default FooterTitleBlock;
