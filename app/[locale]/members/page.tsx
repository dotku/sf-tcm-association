import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';

export default function MembersPage() {
  const t = useTranslations('members');

  const benefits = [
    { key: 'benefit1', icon: '🤝' },
    { key: 'benefit2', icon: '📚' },
    { key: 'benefit3', icon: '📢' },
    { key: 'benefit4', icon: '🛠️' },
  ];

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
          <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('intro')}
            </p>
          </div>

          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('benefits')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.key} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {t(benefit.key as any)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t(`${benefit.key}Desc` as any)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-700 dark:bg-emerald-900 text-white p-12 rounded-lg shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4">{t('joinUs')}</h2>
            <p className="text-xl mb-8 text-emerald-100">{t('joinUsText')}</p>
            <a
              href="/contact"
              className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              {useTranslations('nav')('contact')}
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
