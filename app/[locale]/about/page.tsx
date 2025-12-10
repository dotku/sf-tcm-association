import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className="bg-emerald-700 dark:bg-emerald-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl text-emerald-100">{t('subtitle')}</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
                {t('mission')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('missionText')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
                {t('vision')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('visionText')}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {t('values')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {t('value1')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('value1Text')}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {t('value2')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('value2Text')}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {t('value3')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('value3Text')}
                </p>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">
              {t('history')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t('historyText')}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
