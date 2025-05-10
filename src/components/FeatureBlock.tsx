import Image from 'next/image';

interface FeatureBlockProps {
    featureList: string[];
}

const FeatureBlock = ({ featureList }: FeatureBlockProps) => {

    const half = Math.ceil(featureList.length / 2);
    const leftList = featureList.slice(0, half);
    const rightList = featureList.slice(half);

    const renderFeatureItem = (feature: string, index: number) => (
        <li key={index} className="flex items-center gap-[0.7rem]">
            <Image src="/icon_checkBox.svg" alt="체크박스 아이콘" width={48} height={48} />
            <p className="text-white title-med-32">{feature}</p>
        </li>
    );

    return ( 
    <div className="flex w-[100rem] h-[35rem] justify-center items-center gap-[12rem] flex-shrink-0 rounded-[20px] bg-gray-bg-02">
        <ul className="flex w-[26.5rem] flex-col items-start gap-[1.5rem] flex-shrink-0">
            {leftList.map(renderFeatureItem)}
        </ul>
        <ul className="flex w-[32.4rem] flex-col items-start gap-[1.5rem] flex-shrink-0">
            {rightList.map(renderFeatureItem)}  
            <li className="flex items-center gap-[0.7rem] self-stretch">
                <Image src="/task_meatball.svg" alt="더보기 아이콘" width={48} height={48} className='pt-0 pr-[0.9929rem] pb-0 pl-[1.05rem]'/>
                <p className="text-gray-04 title-med-32">more coming soon</p>
            </li>
        </ul>
    </div>
    );
};

export default FeatureBlock;
