import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';

export default function NewsPage() {
  const t = useTranslations('news');

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="bg-emerald-700 dark:bg-emerald-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl text-emerald-100">{t('subtitle')}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-6">📰</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('upcomingEvents')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('noEvents')}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
