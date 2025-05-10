import FooterTitleBlock from '@/components/FooterTitleBlock';
import FooterContentBlock from '@/components/FooterContentBlock';

type FooterItem = string | { label: string; value: string; src: string; } ;

interface FooterContents {
    title: string;
    items: FooterItem[];
}
interface FooterProps {
    contents:{
        sections: FooterContents [];
    };
}

const Footer = ({contents}: FooterProps) => {
    return (
        <footer className="row-start-3 flex flex-col w-full px-[3rem] py-[6rem] justify-center items-center gap-6 bg-gray-bg-02 sm:px-[4rem] sm:py-[8rem]">
        <div className="flex flex-col w-full items-start gap-[6rem] lg:flex-row xl:gap-[40rem] 2xl:w-[155.2rem]">
            <FooterTitleBlock />
            <div className="flex flex-col items-start gap-[6rem] flex-[1_0_0] sm:flex-row">
                {contents.sections.map((section, index) => (
                <FooterContentBlock key={index} title={section.title} items={section.items} />
            ))}
            </div>
        </div>
        </footer>
    );
};

export default Footer;