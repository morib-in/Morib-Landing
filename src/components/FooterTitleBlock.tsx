import Image from 'next/image';
import { FOOTER_CONTENT } from '@/constants/contents';

const FooterTitleBlock = () => {
  return (
    <div className="flex flex-col items-start gap-[4rem]">
      <div className="flex flex-col items-start gap-[1.3rem]">
        <Image src="/logo_name.svg" alt="모립 로고 사진" width={125} height={52}/>
          <span className="text-gray-05 subhead-med-18">
            {FOOTER_CONTENT.title_text}
          </span>  
      </div>
      <button type="button" className="flex justify-center items-center gap-[0.8rem] px-[1.6rem] py-[0.8rem] rounded-[0.6rem] bg-gray-bg-04 text-white body-bold-16">
          다운로드
      </button>
    </div>
  );
};
export default FooterTitleBlock;
