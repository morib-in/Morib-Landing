'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BUTTON_DOWNLOAD_TEXT } from '@/constants/contents';
import ModalWrapper from './ModalWrapper';
import ModalMobileDownload from './ModalMobileDownload';

const Header = () => {

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
        <>
        <header className="fixed bg-gray-bg-00 left-0 right-0 top-0 z-10 flex w-full h-[7.7rem] px-[2.4rem] py-[2rem] sm:px-[3.2rem] items-start justify-between">
        <div className="flex items-center gap-[7px]">
            <Image src="/logo_icon.svg" alt="모립 로고 사진" width={30} height={29}/>
            <Image src="/logo_name.svg" alt="모립 로고 이름" width={88} height={37}/>
        </div>
        <button type="button" onClick={handleClickDownload} className="flex items-center justify-center gap-[0.8rem] px-[1.6rem] py-[0.8rem] rounded-[0.6rem] bg-white text-gray-01 body-bold-16 hover:bg-mint-01">
            {BUTTON_DOWNLOAD_TEXT}
        </button>
        {isModalOpen && (
        <ModalWrapper onClose={handleModalClose}>
            <ModalMobileDownload onClose={handleModalClose}/>
        </ModalWrapper>
        )}
        </header>
    </>
    );
};

export default Header;