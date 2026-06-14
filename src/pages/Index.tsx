import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const CARD_IMG =
  'https://cdn.poehali.dev/projects/4efe8e00-32dc-4540-a6de-4f38718d5016/files/7964650a-8cf8-4a11-b62d-a3fe175edf7b.jpg';

const DENOMINATIONS = [1000, 2000, 3000, 5000, 7000, 10000, 15000, 25000];

const NAV = [
  { label: 'Главная', href: '#hero' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Оплата и доставка', href: '#delivery' },
];

const STEPS = [
  {
    icon: 'MousePointerClick',
    title: 'Выберите номинал',
    text: 'От 1 000 до 25 000 ₽ — карта на любой случай.',
  },
  {
    icon: 'CreditCard',
    title: 'Оплатите удобным способом',
    text: 'Карта, СБП или электронные кошельки.',
  },
  {
    icon: 'Mail',
    title: 'Получите код на email',
    text: 'Код приходит мгновенно после оплаты.',
  },
];

const Index = () => {
  const [selected, setSelected] = useState<number | null>(5000);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/70 border-b border-zinc-100">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2 font-semibold tracking-tightest text-lg"
          >
            <Icon name="Apple" size={22} className="fill-zinc-900" />
            Gift Card
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
            {NAV.map((n) => (
              <button
                key={n.href}
                onClick={() => scrollTo(n.href)}
                className="hover:text-zinc-900 transition-colors"
              >
                {n.label}
              </button>
            ))}
          </div>
          <Button
            onClick={() => scrollTo('#catalog')}
            className="rounded-full bg-zinc-900 hover:bg-zinc-700 px-5 h-9 text-sm"
          >
            Купить
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative pt-36 pb-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-50 to-white" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-pink-200/40 via-sky-200/30 to-amber-100/40 blur-3xl" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 bg-zinc-100 rounded-full px-3 py-1.5 mb-6">
              <Icon name="Zap" size={14} />
              Код на email за секунды
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tightest leading-[1.05] text-balance">
              Apple Gift Card.
              <br />
              <span className="text-zinc-400">Подарок, который работает.</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-500 max-w-md text-balance">
              Пополняйте Apple ID, покупайте приложения, игры, музыку и
              подписки. Карта приходит на почту сразу после оплаты.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                onClick={() => scrollTo('#catalog')}
                className="rounded-full bg-zinc-900 hover:bg-zinc-700 h-12 px-7 text-base"
              >
                Выбрать номинал
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo('#delivery')}
                className="rounded-full h-12 px-7 text-base border-zinc-300"
              >
                Как это работает
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <img
              src={CARD_IMG}
              alt="Apple Gift Card"
              className="w-[80%] max-w-sm rounded-3xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: 'Clock', t: 'Мгновенно', s: 'Доставка за секунды' },
            { icon: 'ShieldCheck', t: 'Официально', s: 'Оригинальные коды' },
            { icon: 'Globe', t: 'Регион РФ', s: 'Работает с App Store' },
            { icon: 'Headphones', t: 'Поддержка', s: 'Поможем 24/7' },
          ].map((f) => (
            <div key={f.t} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                <Icon name={f.icon} size={18} className="text-zinc-700" />
              </div>
              <div>
                <div className="font-semibold text-sm">{f.t}</div>
                <div className="text-xs text-zinc-500">{f.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tightest">
              Каталог номиналов
            </h2>
            <p className="mt-4 text-zinc-500 text-lg">
              Выберите сумму — остальное мы сделаем за вас.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DENOMINATIONS.map((amount, i) => {
              const active = selected === amount;
              return (
                <button
                  key={amount}
                  onClick={() => setSelected(amount)}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className={`group relative animate-scale-in rounded-2xl border p-6 text-left transition-all duration-300 ${
                    active
                      ? 'border-zinc-900 bg-zinc-900 text-white shadow-xl'
                      : 'border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-md'
                  }`}
                >
                  <Icon
                    name="Apple"
                    size={20}
                    className={active ? 'text-white' : 'text-zinc-300'}
                  />
                  <div className="mt-8 text-3xl font-extrabold tracking-tightest">
                    {amount.toLocaleString('ru-RU')} ₽
                  </div>
                  <div
                    className={`mt-1 text-sm ${
                      active ? 'text-zinc-300' : 'text-zinc-400'
                    }`}
                  >
                    Apple Gift Card
                  </div>
                  {active && (
                    <div className="absolute top-5 right-5 h-6 w-6 rounded-full bg-white flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-zinc-900" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Button className="rounded-full bg-zinc-900 hover:bg-zinc-700 h-14 px-10 text-base">
              Купить за {selected ? selected.toLocaleString('ru-RU') : '—'} ₽
              <Icon name="ArrowRight" size={18} className="ml-1" />
            </Button>
            <p className="text-xs text-zinc-400">
              После оплаты код придёт на ваш email мгновенно
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / DELIVERY */}
      <section id="delivery" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tightest">
              Оплата и доставка
            </h2>
            <p className="mt-4 text-zinc-500 text-lg">
              Три простых шага — и карта у вас на почте.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="relative bg-white rounded-2xl p-8 border border-zinc-100"
              >
                <span className="absolute top-6 right-6 text-5xl font-extrabold text-zinc-100">
                  {i + 1}
                </span>
                <div className="h-12 w-12 rounded-xl bg-zinc-900 flex items-center justify-center mb-5">
                  <Icon name={s.icon} size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold tracking-tightest mb-5">
                Способы оплаты
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'CreditCard', t: 'Банковская карта' },
                  { icon: 'Smartphone', t: 'СБП' },
                  { icon: 'Wallet', t: 'Электронные кошельки' },
                  { icon: 'Building2', t: 'Для юр. лиц' },
                ].map((p) => (
                  <div
                    key={p.t}
                    className="flex items-center gap-3 bg-white rounded-xl border border-zinc-100 px-4 py-3"
                  >
                    <Icon name={p.icon} size={18} className="text-zinc-700" />
                    <span className="text-sm font-medium">{p.t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tightest mb-5">
                Частые вопросы
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="1">
                  <AccordionTrigger>Как быстро придёт код?</AccordionTrigger>
                  <AccordionContent>
                    Код приходит на указанный email автоматически в течение
                    нескольких секунд после успешной оплаты.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger>Что делать, если письмо не пришло?</AccordionTrigger>
                  <AccordionContent>
                    Проверьте папку «Спам». Если кода нет — напишите в поддержку,
                    и мы вышлем его повторно.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger>Подходит ли карта для App Store РФ?</AccordionTrigger>
                  <AccordionContent>
                    Да, карты предназначены для аккаунтов российского региона и
                    работают с App Store, iTunes и подписками.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-900 text-white text-center px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tightest text-balance">
            Готовы подарить впечатления?
          </h2>
          <p className="mt-4 text-zinc-400 max-w-md mx-auto">
            Выберите номинал и отправьте Apple Gift Card на любой email за пару
            минут.
          </p>
          <Button
            onClick={() => scrollTo('#catalog')}
            className="mt-8 rounded-full bg-white text-zinc-900 hover:bg-zinc-200 h-12 px-8 text-base"
          >
            Перейти в каталог
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-100 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <div className="flex items-center gap-2 font-semibold text-zinc-900">
            <Icon name="Apple" size={18} className="fill-zinc-900" />
            Gift Card Store
          </div>
          <p>© {new Date().getFullYear()} Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
