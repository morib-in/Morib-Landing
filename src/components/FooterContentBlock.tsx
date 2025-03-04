type FooterItem = string | { label: string; value: string };

interface FooterContentProps {
  title: string;
  items: FooterItem[];
}

const FooterContentBlock = ({title, items}: FooterContentProps) => {
  const renderFooterItems = (items: FooterItem[]) => {
    return items.map((item, index) => (
      typeof item === 'string' ? (
        <li key={index} className="self-stretch text-gray-04 subhead-med-18 max-w-[27.4rem] break-words">
          {item}
        </li>
      ) : (
        <li key={index} className="flex items-center gap-[2rem] self-stretch">
          <span className="self-stretch text-gray-04 subhead-med-18">{item.label}</span>
          <span className="self-stretch text-gray-04 subhead-med-18">{item.value}</span>          </li>
      )
    ));
  }; 

  return (
    <div className="flex flex-col w-full gap-[2rem]">
    <h3 className="self-stretch text-white head-bold-24">
      {title}
    </h3>
    <ul className="flex flex-col items-start gap-[1rem] self-stretch">
      {renderFooterItems(items)}
    </ul>
  </div>
  );
};

export default FooterContentBlock;