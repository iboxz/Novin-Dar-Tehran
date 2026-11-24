/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect} from 'react';
import './chrome.css';
import './chrome.js';

const PAGES = [
  {title: 'محصولات و خدمات', href: '/products.html', badge: 'کاتالوگ'},
  {title: 'ارتباط با ما', href: '/contact.html', badge: 'تماس'},
];

const PRODUCTS = [
  {title: 'جک‌های پارکینگی', kind: 'تجهیزات تردد خودرو', href: '/products/jack.html'},
  {title: 'درب‌های شیشه‌ای اتوماتیک', kind: 'ورودی ساختمان و فروشگاه', href: '/products/glass.html'},
  {title: 'درب‌های کرکره‌ای', kind: 'حفاظتی، فروشگاهی و پارکینگی', href: '/products/shutter.html'},
  {title: 'راهبندهای اتوماتیک', kind: 'کنترل تردد خودرو', href: '/products/barrier.html'},
  {title: 'شیشهٔ بالکنی', kind: 'بالکن، تراس و نما', href: '/products/balcony.html'},
  {title: 'درب‌های فولدینگ', kind: 'پارکینگی و ورودی کم‌فضا', href: '/products/folding.html'},
  {title: 'درب‌های سکشنال', kind: 'پارکینگی، ویلا و صنعتی', href: '/products/sectional.html'},
];

export default function App() {
  useEffect(() => {
    document.documentElement.lang = 'fa';
    document.documentElement.dir = 'rtl';
    document.title = 'نوین درب تهران | پیش‌نمایش صفحات';
  }, []);

  return (
    <main id="main">
      <section className="wrap py-8 sm:py-14">
        <div className="border border-[var(--line)] bg-[var(--surface)] rounded-[var(--r)] p-5 sm:p-10 grid gap-6">
          <div className="grid gap-3">
            <span className="label label--dot">پوستهٔ موقت مسیر اصلی</span>
            <h1 className="text-[clamp(2rem,9vw,2.75rem)] lg:text-4xl font-black text-[var(--ink)] leading-[1.3] [text-wrap:balance]">
              نوین درب تهران — دسترسی مستقیم به صفحات پروژه
            </h1>
            <p className="text-[var(--muted)] max-w-2xl text-base leading-[1.8]">
              فایل اصلی <bdi dir="ltr">index.html</bdi> در فایل‌های بارگذاری‌شده وجود نداشت و محتوای صفحهٔ اصلی بازنویسی نشده است. از دکمه‌های زیر یا منوی بالای صفحه می‌توانید تمام صفحات پروژه را مشاهده و بررسی کنید.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
            {PAGES.map((page, index) => (
              <a
                key={page.href}
                href={page.href}
                className={`${index === 0 ? 'btn btn--primary' : 'btn btn--secondary'} w-full sm:w-auto min-h-[48px]`}
              >
                {page.title}
              </a>
            ))}
          </div>

          <div className="border-t border-[var(--line)] pt-6 grid gap-3">
            <h2 className="text-base lg:text-sm font-bold text-[var(--accent-deep)]">
              صفحات محصولات
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PRODUCTS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between gap-3 border border-[var(--line)] bg-[var(--bg)] hover:border-[var(--ink)] active:scale-[0.98] rounded-[var(--r)] px-4 py-3 min-h-[48px] transition-all"
                >
                  <span className="grid gap-0.5 min-w-0">
                    <span className="font-bold text-[var(--ink)] text-sm truncate">
                      {item.title}
                    </span>
                    <span className="text-xs text-[var(--muted)] truncate">
                      {item.kind}
                    </span>
                  </span>
                  <span className="text-xs font-semibold text-[var(--accent-deep)] shrink-0">
                    مشاهده
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
