import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/388a6f38-35fc-41c7-9a06-727bc2150bda/files/2d156b5c-9f83-4c6f-bb99-73185322a8f4.jpg";
const OFFICE_IMG = "https://cdn.poehali.dev/projects/388a6f38-35fc-41c7-9a06-727bc2150bda/files/bc1268a3-438f-4850-b8be-fbfef44d7484.jpg";
const BOARD_IMG = "https://cdn.poehali.dev/projects/388a6f38-35fc-41c7-9a06-727bc2150bda/files/a900618b-486c-4ef0-ac42-efcafb8d2711.jpg";

const marqueeItems = [
  "Кабинеты руководителя", "Рабочие места", "Переговорные комнаты",
  "Мягкая мебель", "Шкафы и стеллажи", "Кресла и стулья",
  "Столы для сотрудников", "Ресепшн-стойки", "Зоны ожидания",
];

const stats = [
  { num: "15", unit: "лет", label: "на рынке" },
  { num: "10K+", unit: "", label: "выполненных проектов" },
  { num: "500+", unit: "", label: "моделей в наличии" },
  { num: "48ч", unit: "", label: "срочная доставка" },
];

const categories = [
  { title: "Кабинет\nруководителя", tag: "Премиум", img: HERO_IMG },
  { title: "Рабочие\nместа", tag: "Популярное", img: OFFICE_IMG },
  { title: "Переговорные\nкомнаты", tag: "Бизнес", img: BOARD_IMG },
];

const advantages = [
  {
    num: "01",
    title: "Собственное\nпроизводство",
    desc: "Мебель изготавливается на наших мощностях из сертифицированных материалов ЛДСП, MDF, натурального шпона.",
  },
  {
    num: "02",
    title: "Размеры\nпод заказ",
    desc: "Нестандартные габариты, угловые конфигурации, индивидуальные цветовые решения — без доплаты за сложность.",
  },
  {
    num: "03",
    title: "Доставка\nпо России",
    desc: "Логистика до любого города. По Москве — сборка и установка включены в стоимость.",
  },
  {
    num: "04",
    title: "Гарантия\n18 месяцев",
    desc: "Официальная гарантия на всю продукцию. Сервисное обслуживание и замена при дефектах.",
  },
];

const process = [
  { step: "I", title: "Заявка", desc: "Оставляете контакт — менеджер перезванивает за 30 минут" },
  { step: "II", title: "Проект", desc: "Замер, дизайн-проект, спецификация и смета" },
  { step: "III", title: "Производство", desc: "Изготовление от 5 рабочих дней с уведомлением о готовности" },
  { step: "IV", title: "Монтаж", desc: "Доставка, сборка и подключение — сдаём под ключ" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", goal: "" });
  const [sent, setSent] = useState(false);

  const statsSection = useInView();
  const advSection = useInView();
  const processSection = useInView();
  const formSection = useInView();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] overflow-x-hidden" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 md:px-12 h-16"
          style={{ background: "rgba(245,243,239,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#1C1915] flex items-center justify-center">
              <span className="text-[#D4A96A] text-[11px] font-bold" style={{ fontFamily: "'Cormorant', serif" }}>ГО</span>
            </div>
            <span className="text-[#1C1915] font-semibold text-sm tracking-wide uppercase">ГлавОфис</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {[["Каталог", "#catalog"], ["О нас", "#about"], ["Как работаем", "#process"], ["Контакты", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} className="text-[13px] text-[#1C1915]/55 hover:text-[#1C1915] transition-colors tracking-wide">{l}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+74953744481" className="hidden md:flex items-center gap-2 text-sm text-[#1C1915]/70 font-medium hover:text-[#D4A96A] transition-colors">
              <Icon name="Phone" size={14} />
              +7 (495) 374-44-81
            </a>
            <a href="#contact"
              className="hidden md:inline-flex px-5 py-2 bg-[#1C1915] text-[#F5F3EF] text-[11px] uppercase tracking-[0.1em] font-medium hover:bg-[#D4A96A] transition-colors">
              Заявка
            </a>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={20} className="text-[#1C1915]" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#F5F3EF] border-b border-[#1C1915]/10 px-6 py-5 flex flex-col gap-5">
            {[["Каталог", "#catalog"], ["О нас", "#about"], ["Как работаем", "#process"], ["Контакты", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} onClick={() => setMenuOpen(false)} className="text-sm text-[#1C1915]/70 uppercase tracking-wider">{l}</a>
            ))}
            <a href="tel:+74953744481" className="text-[#1C1915] font-semibold">+7 (495) 374-44-81</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex flex-col pt-16">
        <div className="grid md:grid-cols-2 min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-0 order-2 md:order-1">
            <div className="anim-fadeup anim-delay-1">
              <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#1C1915]/40 mb-8 border-b border-[#1C1915]/15 pb-2">
                Офисная мебель · Москва и вся Россия
              </span>
            </div>
            <h1 className="anim-fadeup anim-delay-2 leading-[0.9] mb-8"
              style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "clamp(3rem, 6.5vw, 5.5rem)", color: "#1C1915", letterSpacing: "-0.01em" }}>
              Мебель,<br />
              <em style={{ fontStyle: "italic", color: "#D4A96A" }}>достойная</em><br />
              вашего офиса
            </h1>
            <p className="anim-fadeup anim-delay-3 text-[#1C1915]/50 text-lg leading-relaxed max-w-sm mb-10">
              Производство и продажа офисной мебели с 2009 года. Собственный завод, индивидуальные решения, доставка по России.
            </p>
            <div className="anim-fadeup anim-delay-4 flex flex-col sm:flex-row gap-4">
              <a href="#catalog"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C1915] text-[#F5F3EF] text-xs uppercase tracking-[0.12em] font-medium hover:bg-[#D4A96A] transition-all duration-300">
                Смотреть каталог
                <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#1C1915]/25 text-[#1C1915] text-xs uppercase tracking-[0.12em] hover:border-[#D4A96A] hover:text-[#D4A96A] transition-all duration-300">
                Получить смету
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2 h-[55vw] md:h-auto min-h-[300px]">
            <img src={HERO_IMG} alt="Офис руководителя" className="anim-img absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/25 to-transparent" />
            <div className="absolute bottom-6 left-6 hidden md:block">
              <div className="inline-flex items-center gap-3 bg-[#F5F3EF]/90 px-4 py-3" style={{ backdropFilter: "blur(8px)" }}>
                <div className="w-2 h-2 bg-[#D4A96A] rounded-full" />
                <span className="text-[10px] text-[#1C1915] uppercase tracking-[0.15em]">Кабинет руководителя</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden py-3 bg-[#1C1915]">
          <div className="animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8 px-8 text-[11px] uppercase tracking-[0.18em] text-[#F5F3EF]/50 whitespace-nowrap">
                {item}
                <span className="text-[#D4A96A]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsSection.ref} className="bg-[#1C1915] py-1">
        <div className="max-w-6xl mx-auto px-8 md:px-12 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
            {stats.map((s, i) => (
              <div key={i} className={`px-8 py-10 text-center ${statsSection.inView ? `anim-fadeup anim-delay-${i + 1}` : "opacity-0"}`}>
                <div className="text-[#D4A96A]" style={{ fontFamily: "'Cormorant', serif", fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}>
                  {s.num}<span className="text-xl">{s.unit}</span>
                </div>
                <div className="text-[#F5F3EF]/35 text-[10px] uppercase tracking-widest mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#1C1915]/35 mb-4">Ассортимент</p>
              <h2 className="leading-none" style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#1C1915" }}>
                Каталог мебели
              </h2>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-xs text-[#1C1915]/40 hover:text-[#D4A96A] transition-colors uppercase tracking-widest">
              Полный каталог <Icon name="ArrowRight" size={13} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <a key={i} href="#contact" className="group relative overflow-hidden cursor-pointer" style={{ aspectRatio: "3/4" }}>
                <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/80 via-[#1C1915]/15 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#D4A96A] text-[#1C1915] text-[10px] uppercase tracking-widest font-semibold">
                    {cat.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-[#F5F3EF] mb-3 whitespace-pre-line"
                    style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "1.65rem", lineHeight: 1.05 }}>
                    {cat.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#D4A96A] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Смотреть коллекцию <Icon name="ArrowRight" size={11} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {["Мягкая мебель", "Шкафы и хранение", "Кресла и стулья", "Ресепшн"].map((title, i) => (
              <a key={i} href="#contact"
                className="group flex items-center justify-between px-5 py-4 border border-[#1C1915]/10 hover:border-[#D4A96A] hover:bg-[#1C1915] transition-all duration-300 cursor-pointer">
                <span className="text-[#1C1915] group-hover:text-[#F5F3EF] transition-colors"
                  style={{ fontFamily: "'Cormorant', serif", fontSize: "1.05rem", fontWeight: 500 }}>
                  {title}
                </span>
                <Icon name="ArrowRight" size={13} className="text-[#1C1915]/25 group-hover:text-[#D4A96A] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / SPLIT */}
      <section id="about" className="bg-[#1C1915] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5F3EF]/25 mb-6">О компании</p>
              <h2 className="text-[#F5F3EF] leading-tight mb-8"
                style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Офис — это<br />
                инструмент<br />
                <em style={{ color: "#D4A96A", fontStyle: "italic" }}>вашего роста</em>
              </h2>
              <p className="text-[#F5F3EF]/45 text-base leading-relaxed mb-5">
                С 2009 года оснащаем офисы российских компаний — от стартапов до федеральных корпораций. Собственное производство позволяет держать цены без компромисса по качеству.
              </p>
              <p className="text-[#F5F3EF]/45 text-base leading-relaxed mb-10">
                Каждый проект начинается с обмера и заканчивается сдачей под ключ. Личный менеджер ведёт вас от первого звонка до подписания акта.
              </p>
              <div className="w-full h-px bg-[#F5F3EF]/10 mb-8 anim-line" />
              <a href="#contact" className="inline-flex items-center gap-3 text-[#D4A96A] text-xs uppercase tracking-widest hover:gap-5 transition-all duration-300">
                Обсудить проект <Icon name="ArrowRight" size={13} />
              </a>
            </div>
            <div className="relative">
              <img src={OFFICE_IMG} alt="Офис" className="w-full object-cover" style={{ aspectRatio: "4/5" }} />
              <div className="absolute -bottom-5 -left-5 bg-[#D4A96A] px-6 py-5 hidden md:block">
                <div className="text-[#1C1915] font-bold" style={{ fontFamily: "'Cormorant', serif", fontWeight: 700, fontSize: "2.5rem", lineHeight: 1 }}>18</div>
                <div className="text-[#1C1915]/60 text-[10px] uppercase tracking-wider mt-1">мес. гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section ref={advSection.ref} className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#1C1915]/35 mb-4">Преимущества</p>
            <h2 className="leading-none" style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#1C1915" }}>
              Почему ГлавОфис
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1C1915]/6">
            {advantages.map((adv, i) => (
              <div key={i}
                className={`bg-[#F5F3EF] p-10 group hover:bg-[#1C1915] transition-all duration-500 border border-[#1C1915]/6 ${advSection.inView ? `anim-fadeup anim-delay-${i + 1}` : "opacity-0"}`}>
                <div className="text-[#1C1915]/10 group-hover:text-[#D4A96A]/25 text-6xl font-bold mb-5 transition-colors duration-500"
                  style={{ fontFamily: "'Cormorant', serif", fontWeight: 700, lineHeight: 1 }}>
                  {adv.num}
                </div>
                <h4 className="text-[#1C1915] group-hover:text-[#F5F3EF] text-xl mb-3 whitespace-pre-line transition-colors duration-500"
                  style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, lineHeight: 1.15 }}>
                  {adv.title}
                </h4>
                <p className="text-[#1C1915]/45 group-hover:text-[#F5F3EF]/45 text-sm leading-relaxed transition-colors duration-500">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" ref={processSection.ref} className="py-24 md:py-32 bg-[#EDEBE5]">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#1C1915]/35 mb-4">Процесс</p>
            <h2 className="leading-none" style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#1C1915" }}>
              Как мы работаем
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {process.map((p, i) => (
              <div key={i} className={`relative ${processSection.inView ? `anim-fadeup anim-delay-${i + 1}` : "opacity-0"}`}>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-4 left-full w-full h-px bg-[#1C1915]/12 z-0" />
                )}
                <div className="relative z-10">
                  <div className="text-[#D4A96A] mb-4 uppercase tracking-widest"
                    style={{ fontFamily: "'Cormorant', serif", fontSize: "1.1rem", fontWeight: 600 }}>
                    {p.step}
                  </div>
                  <div className="w-8 h-px bg-[#1C1915]/18 mb-5" />
                  <h4 className="text-[#1C1915] mb-3" style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "1.25rem" }}>
                    {p.title}
                  </h4>
                  <p className="text-[#1C1915]/45 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={formSection.ref} className="py-24 md:py-32 bg-[#1C1915]">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className={formSection.inView ? "anim-fadeup anim-delay-1" : "opacity-0"}>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5F3EF]/25 mb-6">Контакты</p>
              <h2 className="text-[#F5F3EF] leading-tight mb-8"
                style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Начнём работу<br />
                <em style={{ color: "#D4A96A", fontStyle: "italic" }}>вместе</em>
              </h2>
              <p className="text-[#F5F3EF]/40 text-base leading-relaxed mb-12">
                Оставьте заявку — в течение 30 минут с вами свяжется персональный менеджер и предложит оптимальное решение.
              </p>
              <div className="space-y-7">
                {[
                  { icon: "Phone", label: "Телефон", main: "+7 (495) 374-44-81", sub: "8 (800) 707-33-71 — бесплатно", href: "tel:+74953744481" },
                  { icon: "Mail", label: "Email", main: "info@glavoffice.ru", sub: "", href: "mailto:info@glavoffice.ru" },
                  { icon: "Clock", label: "Режим работы", main: "Пн–Пт: 9:00–19:00", sub: "Сб: 10:00–16:00", href: "" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-[#F5F3EF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={c.icon} fallback="Info" size={15} className="text-[#D4A96A]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#F5F3EF]/25 uppercase tracking-widest mb-1">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-[#F5F3EF] hover:text-[#D4A96A] transition-colors text-sm">{c.main}</a>
                      ) : (
                        <div className="text-[#F5F3EF] text-sm">{c.main}</div>
                      )}
                      {c.sub && <div className="text-[#F5F3EF]/30 text-xs mt-0.5">{c.sub}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={formSection.inView ? "anim-fadeup anim-delay-3" : "opacity-0"}>
              <div className="border border-[#F5F3EF]/10 p-8 md:p-10">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="text-[#D4A96A] mb-4" style={{ fontFamily: "'Cormorant', serif", fontSize: "4rem" }}>✓</div>
                    <h3 className="text-[#F5F3EF] text-2xl mb-3" style={{ fontFamily: "'Cormorant', serif", fontWeight: 600 }}>
                      Заявка получена
                    </h3>
                    <p className="text-[#F5F3EF]/35 text-sm">Менеджер перезвонит в течение 30 минут</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-[#F5F3EF] mb-1" style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "1.7rem" }}>
                      Оставить заявку
                    </h3>
                    <p className="text-[#F5F3EF]/30 text-sm mb-8">Расскажите о задаче — подберём решение</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {[
                        { label: "Имя", key: "name", placeholder: "Иван Петров", type: "text", required: false },
                        { label: "Телефон *", key: "phone", placeholder: "+7 (___) ___-__-__", type: "tel", required: true },
                        { label: "Задача", key: "goal", placeholder: "Оснастить офис 20 рабочих мест", type: "text", required: false },
                      ].map((f) => (
                        <div key={f.key}>
                          <label className="block text-[10px] text-[#F5F3EF]/35 uppercase tracking-widest mb-2">{f.label}</label>
                          <input
                            type={f.type}
                            required={f.required}
                            placeholder={f.placeholder}
                            value={form[f.key as keyof typeof form]}
                            onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                            className="w-full bg-transparent border-b border-[#F5F3EF]/12 text-[#F5F3EF] placeholder-[#F5F3EF]/18 py-3 text-sm outline-none focus:border-[#D4A96A] transition-colors"
                          />
                        </div>
                      ))}
                      <div className="pt-3">
                        <button type="submit"
                          className="w-full py-4 bg-[#D4A96A] text-[#1C1915] text-[11px] uppercase tracking-[0.15em] font-semibold hover:bg-[#F5F3EF] transition-colors duration-300">
                          Отправить заявку
                        </button>
                      </div>
                      <p className="text-center text-[#F5F3EF]/18 text-[11px]">
                        Нажимая, вы соглашаетесь с{" "}
                        <a href="#" className="underline hover:text-[#F5F3EF]/40 transition-colors">политикой конфиденциальности</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111009] py-10">
        <div className="max-w-6xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#D4A96A] flex items-center justify-center">
              <span className="text-[#1C1915] text-[9px] font-bold">ГО</span>
            </div>
            <span className="text-[#F5F3EF]/35 text-xs uppercase tracking-widest">ГлавОфис · Офисная мебель</span>
          </div>
          <p className="text-[#F5F3EF]/18 text-xs">© 2009–2026 ГлавОфис. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[#F5F3EF]/18 text-xs hover:text-[#F5F3EF]/45 transition-colors uppercase tracking-wider">Политика</a>
            <a href="#" className="text-[#F5F3EF]/18 text-xs hover:text-[#F5F3EF]/45 transition-colors uppercase tracking-wider">Оферта</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
