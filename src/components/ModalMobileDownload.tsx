interface ModalMobileDownloadProps {
  onClose: () => void;
}

const ModalMobileDownload = ({ onClose }: ModalMobileDownloadProps) => {
  return (
    <div className="flex w-[32rem] flex-col items-center gap-[2rem] rounded-[0.8rem] bg-gray-bg-04 p-[2rem]">
      <div className="flex flex-col items-start gap-[0.5rem] self-stretch">
        <h2 className="self-stretch text-center text-white subhead-semibold-18">
          모립은 지금 데스크톱에서만 <br /> 이용할 수 있어요
        </h2>
        <p className="self-stretch text-center text-white detail-reg-14">모립을 설치하고 온전한 몰입을 경험해보세요!</p>
      </div>

      <button
        onClick={onClose}
        className="p-[1rem 4.8rem] flex h-[4.6rem] items-center justify-center gap-[1rem] self-stretch rounded-[0.5rem] bg-gray-bg-06 text-white subhead-semibold-18">
        확인
      </button>
    </div>
  );
};

export default ModalMobileDownload;
