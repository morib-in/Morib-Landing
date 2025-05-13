import React, { useState } from 'react';
import Image from 'next/image';

const WindowsDownloadDialog = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const resetInputState = () => {
    setStatus('idle');
    setMessage('');
  };

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('알맞은 형식의 이메일을 입력해 주세요.');
      return;
    }
    try {
      await submitEmail(email);
      setStatus('success');
      setMessage('출시 알림 등록이 완료되었습니다.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('등록 중 오류가 발생했습니다. 다시 시도해 주세요.');
      console.log(error);
    }
  };

  const submitEmail = async (email: string) => {
    try {
      const response = await fetch('https://api.morib.in/api/v2/waiting/windows', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="relative flex w-[62rem] flex-col items-center gap-[3rem] rounded-[0.8rem] bg-gray-bg-04 p-[4rem_3rem_3rem_3rem]">
      <div className="flex flex-col items-start gap-[1rem] self-stretch">
        <h2 className="self-stretch text-center text-white head-bold-28">Morib for Windows</h2>
        <p className="self-stretch text-center text-gray-05 subhead-med-18">
          곧 Windows에서도 모립을 만나보실 수 있어요. <br />
          이메일을 등록하시면 가장 먼저 출시 소식을 알려드릴게요!
        </p>
      </div>

      <div className="flex flex-col items-start gap-[1rem] self-stretch">
        <div className="relative h-[6.6rem] w-full">
          <input
            type="email"
            placeholder="이메일 입력하기"
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              resetInputState();
            }}
            className={`h-full w-full rounded-[0.8rem] bg-gray-bg-02 pl-[2rem] pr-[10rem] text-white subhead-med-18 placeholder:text-gray-04 focus:outline-none ${status === 'success' ? 'border border-mint-01' : ''} ${status === 'error' ? 'border border-error-01' : ''}`}
          />
          {email && (
            <button
              onClick={() => {
                setEmail('');
                resetInputState();
              }}
              className="absolute right-[12rem] top-1/2 -translate-y-1/2 text-xl text-gray-400"
              aria-label="입력 초기화">
              <Image src="/icon_delete.svg" alt="입력 초기화 아이콘" width={24} height={24} />
            </button>
          )}
          <button
            onClick={handleSubmit}
            disabled={!email}
            className={`absolute right-[1rem] top-1/2 -translate-y-1/2 rounded-[0.5rem] px-[2.2rem] py-[1.2rem] body-semibold-16 ${email ? 'bg-mint-01 text-gray-01' : 'bg-gray-bg-05 text-gray-04'}`}>
            알림받기
          </button>
        </div>
        <div className="flex h-[2rem] items-center gap-[0.5rem]">
          {status === 'success' && <Image src="/icon_success.svg" alt="전송 성공 아이콘" width={20} height={20} />}
          {status === 'error' && <Image src="/icon_error.svg" alt="전송 실패 아이콘" width={20} height={20} />}
          {message && (
            <p className={`body-reg-16 ${status === 'success' ? 'text-mint-01' : 'text-error-01'}`}>{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WindowsDownloadDialog;
