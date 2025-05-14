'use client';

import { useEffect, useState } from 'react';
import { CONFIG } from '../../next.config';
import ModalWrapper from './ModalWrapper';
import ModalWindowDownload from './ModalWindowDownload';
import DownloadServiceButton from './DownloadServiceButton';

const DownloadServiceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState({
    universal: '',
    silicon: '',
    intel: '',
  });

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchDownloadUrl = async () => {
      const response = await fetch(`${CONFIG.API_URL}api/v2/s3/presigned-url`);
      const data = await response.json();
      setDownloadUrl({
        silicon: data[0].url,
        universal: data[1].url,
        intel: data[2].url,
      });
    };

    fetchDownloadUrl();
  }, []);

  return (
    <>
      <div className="flex w-[108.4rem] flex-wrap content-start items-start justify-center gap-x-[1.5rem] gap-y-[1.6rem]">
        <DownloadServiceButton
          iconSrc="/logo_apple.svg"
          iconAlt="애플 로고 아이콘"
          downloadUrl={downloadUrl.universal === '' ? undefined : downloadUrl.universal}
          ariaLabel="macOS용 다운로드(유니버셜)">
          macOS용 다운로드(유니버셜)
        </DownloadServiceButton>

        <DownloadServiceButton
          iconSrc="/logo_apple.svg"
          iconAlt="애플 로고 아이콘"
          downloadUrl={downloadUrl.silicon === '' ? undefined : downloadUrl.silicon}
          ariaLabel="macOS용 다운로드(Apple Silicon)">
          macOS용 다운로드(Apple Silicon)
        </DownloadServiceButton>

        <DownloadServiceButton
          iconSrc="/logo_apple.svg"
          iconAlt="애플 로고 아이콘"
          downloadUrl={downloadUrl.intel === '' ? undefined : downloadUrl.intel}
          ariaLabel="macOS용 다운로드(Intel 기반 Mac)">
          macOS용 다운로드(Intel 기반 Mac)
        </DownloadServiceButton>

        <DownloadServiceButton
          iconSrc="/logo_window.svg"
          iconAlt="윈도우 로고 아이콘"
          onClick={handleModalOpen}
          ariaLabel="윈도우 다운로드 알림">
          Window용 다운로드 알림 받기
        </DownloadServiceButton>
      </div>

      {isModalOpen && (
        <ModalWrapper onClose={handleModalClose}>
          <ModalWindowDownload />
        </ModalWrapper>
      )}
    </>
  );
};

export default DownloadServiceSection;
