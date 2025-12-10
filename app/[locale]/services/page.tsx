import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    { key: 'acupuncture', icon: '🎯' },
    { key: 'herbalMedicine', icon: '🌿' },
    { key: 'tuina', icon: '💆' },
    { key: 'cupping', icon: '🔵' },
    { key: 'moxibustion', icon: '🔥' },
    { key: 'dietary', icon: '🍵' },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.key} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {t(service.key as any)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t(`${service.key}Desc` as any)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
