import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadSection from '@/components/DownloadSection';

import { FOOTER_CONTENT } from '@/constants/contents';


export default function Download() {
  return (
    <div className="flex flex-col bg-gray-bg-00 pt-[7.7rem]">
      <Header />
      <main className="flex flex-col items-center gap-8 lg:items-start">
        <DownloadSection />
      </main>
      <Footer contents={FOOTER_CONTENT} />
    </div>
  );
}
