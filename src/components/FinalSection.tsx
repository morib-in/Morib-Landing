'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DownloadButton from './DownloadButton';
import Modal from './ModalWrapper';
import ModalMobileDownload from './ModalMobileDownload';
import { FINAL_SECTION_CONTENT } from '@/constants/contents';

const FinalSection = () => {

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
    <section className="flex w-full flex-col items-center justify-center gap-[4.8rem] sm:gap-[6rem] sm:py-[4rem]">
      <div className="flex flex-col items-center justify-center gap-[2rem]">
        <h2 className="title-bold-32 sm:title-bold-72">{FINAL_SECTION_CONTENT.title}</h2>
        <DownloadButton onClickDownload={handleClickDownload} />
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <ModalMobileDownload onClose={handleModalClose}/>
          </Modal>
        )}
      </div>
      <Image src="/section6.svg" alt="모립 타이머 이미지" width={1440} height={1080} />
    </section>
  );
};

export default FinalSection;