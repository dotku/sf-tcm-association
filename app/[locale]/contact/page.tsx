'use client';

import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const footer = useTranslations('footer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - not actually sent)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {t('contactInfo')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl text-emerald-600">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {footer('address')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {footer('addressValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-3xl text-emerald-600">📞</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {footer('phone')}
                    </h3>
                    <a href="tel:+14151234567" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600">
                      {footer('phoneValue')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-3xl text-emerald-600">✉️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {footer('email')}
                    </h3>
                    <a href="mailto:info@sfbayareatcm.org" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600">
                      {footer('emailValue')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-3xl text-emerald-600">🕐</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t('officeHours')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('officeHoursValue')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t('sendMessage')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t('namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t('subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  {t('submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
