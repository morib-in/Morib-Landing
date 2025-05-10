import { FEATURE_LIST, DOWNLOAD_MORIB_APP } from '@/constants/contents';
import FeatureBlock from './FeatureBlock';
import DownloadServiceButton from './DownloadServiceSection';

const DownloadSection = () => {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-[9rem] pt-[8rem] pb-[14.1rem]">
            <div className="flex w-[58.8rem] flex-col tems-center gap-[2rem]">
                <h1 className="self-stretch text-center title-bold-72 text-white ">It’s Free to Morib!</h1>
                <p className="text-center text-gray-05 title-med-32 ">Windows와 macOS에서 다운로드 받고 모립의 모든 기능을 무료로 이용하세요.</p>
            </div>
                <FeatureBlock featureList={FEATURE_LIST} />
                <DownloadServiceButton downloadServices={DOWNLOAD_MORIB_APP} />
        </section>
    );
};

export default DownloadSection;