import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations('home');
  const nav = useTranslations('nav');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                {t('title')}
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                  {nav('home')}
                </Link>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                  {nav('about')}
                </Link>
                <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                  {nav('services')}
                </Link>
                <Link href="/members" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                  {nav('members')}
                </Link>
                <Link href="/news" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                  {nav('news')}
                </Link>
                <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                  {nav('contact')}
                </Link>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('welcome')}
          </h1>
          <h2 className="text-3xl font-semibold text-emerald-700 dark:text-emerald-400 mb-8">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            {t('description')}
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {t('aboutUs')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional TCM practitioners serving the Bay Area community
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {t('services')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive traditional Chinese medicine services
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {t('members')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join our network of certified TCM professionals
              </p>
            </div>
          </div>
        </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">
                {useTranslations('footer')('aboutTitle')}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {useTranslations('footer')('aboutText')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">
                {useTranslations('footer')('quickLinks')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {nav('home')}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {nav('about')}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {nav('services')}
                  </Link>
                </li>
                <li>
                  <Link href="/members" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {nav('members')}
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {nav('news')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {nav('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">
                {useTranslations('footer')('contactTitle')}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">📍</span>
                  <div>
                    <p className="text-gray-500">{useTranslations('footer')('address')}</p>
                    <p className="text-gray-400">{useTranslations('footer')('addressValue')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">📞</span>
                  <div>
                    <p className="text-gray-500">{useTranslations('footer')('phone')}</p>
                    <a href="tel:+14151234567" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {useTranslations('footer')('phoneValue')}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✉️</span>
                  <div>
                    <p className="text-gray-500">{useTranslations('footer')('email')}</p>
                    <a href="mailto:info@sfbayareatcm.org" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {useTranslations('footer')('emailValue')}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
                {useTranslations('footer')('copyright')}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  aria-label="WeChat"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
