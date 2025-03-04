import { FINAL_SECTION_CONTENT } from '@/constants/contents';

const DownloadButton = () => {
  return (
    <button
      type="button"
      aria-label="모립 애플리케이션 다운로드 버튼"
      className="rounded-[10px] border border-mint-02 bg-gray-bg-02 px-[1.8rem] py-[1rem] text-mint-02 detail-semibold-14 hover:bg-gray-bg-01 sm:px-[3rem] sm:py-[1.5rem] sm:head-bold-24">
      {FINAL_SECTION_CONTENT.downloadButtonText}
    </button>
  );
};

export default DownloadButton;
