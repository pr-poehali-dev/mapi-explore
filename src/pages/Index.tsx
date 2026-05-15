import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Каталог", href: "#catalog" },
  { label: "О компании", href: "#about" },
  { label: "Доставка", href: "#delivery" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contacts" },
];

const categories = [
  {
    icon: "Briefcase",
    title: "Кабинеты руководителя",
    desc: "Представительные решения для топ-менеджмента",
    count: "120+ моделей",
    color: "bg-[hsl(216,60%,22%)]",
  },
  {
    icon: "Monitor",
    title: "Рабочие места",
    desc: "Эргономичные столы и тумбы для сотрудников",
    count: "200+ моделей",
    color: "bg-[hsl(216,50%,30%)]",
  },
  {
    icon: "Users",
    title: "Переговорные комнаты",
    desc: "Столы и мебель для совещаний",
    count: "80+ моделей",
    color: "bg-[hsl(216,45%,38%)]",
  },
  {
    icon: "LayoutGrid",
    title: "Мягкая мебель",
    desc: "Диваны, кресла и пуфы для зон отдыха",
    count: "90+ моделей",
    color: "bg-[hsl(216,40%,44%)]",
  },
  {
    icon: "Archive",
    title: "Шкафы и хранение",
    desc: "Шкафы-купе, стеллажи, тумбы под документы",
    count: "150+ моделей",
    color: "bg-[hsl(220,35%,50%)]",
  },
  {
    icon: "Armchair",
    title: "Кресла и стулья",
    desc: "Компьютерные, операторские и посетительские",
    count: "180+ моделей",
    color: "bg-[hsl(220,30%,55%)]",
  },
];

const advantages = [
  {
    icon: "BadgeCheck",
    title: "Собственное производство",
    desc: "Мебель изготавливается на наших мощностях из сертифицированных материалов",
  },
  {
    icon: "Truck",
    title: "Доставка по России",
    desc: "Доставляем в любой город России. По Москве — бесплатно от 50 000 ₽",
  },
  {
    icon: "Ruler",
    title: "Мебель под размеры",
    desc: "Изготовим по вашим чертежам — любые нестандартные габариты",
  },
  {
    icon: "Headphones",
    title: "Личный менеджер",
    desc: "Подберём комплектацию, посчитаем смету, возьмём монтаж под ключ",
  },
  {
    icon: "Building2",
    title: "Шоурум в Москве",
    desc: "Живой показ 500+ экспонатов на складе-шоуруме в Москве",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия 18 месяцев",
    desc: "Официальная гарантия на всю мебель собственного производства",
  },
];

const projects = [
  { label: "Банки и финансы", icon: "Landmark" },
  { label: "IT-компании", icon: "Code2" },
  { label: "Медицинские учреждения", icon: "HeartPulse" },
  { label: "Государственные структуры", icon: "Building" },
  { label: "Торговые сети", icon: "ShoppingBag" },
  { label: "Юридические фирмы", icon: "Scale" },
];

const deliverySteps = [
  { num: "01", title: "Заявка", desc: "Оставляете заявку — менеджер связывается в течение 30 минут" },
  { num: "02", title: "Замер и смета", desc: "Выезжаем на объект, снимаем размеры, готовим полный расчёт" },
  { num: "03", title: "Производство", desc: "Изготавливаем мебель в срок от 5 рабочих дней" },
  { num: "04", title: "Доставка", desc: "Доставляем, собираем и устанавливаем — вы только принимаете результат" },
];

const contacts = {
  phones: ["+7 (495) 374-44-81", "+7 (800) 707-33-71"],
  email: "info@glavoffice.ru",
  address: "г. Москва, шоурум и склад — свяжитесь для точного адреса",
  hours: "Пн–Пт: 9:00–19:00 | Сб: 10:00–16:00",
};

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* ── TOP BAR ── */}
      <div className="bg-navy-dark text-white/80 text-sm py-2 hidden md:block"
        style={{ backgroundColor: "hsl(216,65%,14%)" }}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Icon name="MapPin" size={14} />
            Москва и вся Россия — доставка мебели
          </span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Icon name="Clock" size={14} />
              Пн–Пт 9:00–19:00, Сб 10:00–16:00
            </span>
            <a href="tel:+74953744481" className="text-white font-medium hover:text-amber-400 transition-colors">
              +7 (495) 374-44-81
            </a>
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded flex items-center justify-center"
              style={{ backgroundColor: "hsl(216,60%,22%)" }}>
              <Icon name="Building2" size={20} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat font-800 text-lg leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "hsl(216,60%,22%)" }}>
                ГлавОфис
              </div>
              <div className="text-xs text-gray-500 leading-none mt-0.5">офисная мебель</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-[hsl(216,60%,22%)] transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+74953744481"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: "hsl(28,85%,52%)", fontFamily: "'Montserrat', sans-serif" }}>
              <Icon name="Phone" size={15} />
              Позвонить
            </a>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-700 py-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {l.label}
              </a>
            ))}
            <a href="tel:+74953744481"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded text-white font-medium mt-2"
              style={{ backgroundColor: "hsl(28,85%,52%)" }}>
              <Icon name="Phone" size={16} />
              +7 (495) 374-44-81
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "hsl(216,60%,22%)", minHeight: "560px" }}>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 80px)`
          }} />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden md:block"
          style={{
            background: "radial-gradient(circle at 70% 40%, hsl(28,85%,52%), transparent 60%)"
          }} />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium mb-5 bg-white/10 px-3 py-1.5 rounded-full">
              <Icon name="Star" size={14} />
              Более 15 лет на рынке офисной мебели
            </div>
            <h1 className="text-white font-montserrat leading-tight mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
              Офисная мебель<br />
              <span style={{ color: "hsl(35,90%,60%)" }}>для вашего бизнеса</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-lg">
              Производство и продажа офисной мебели. Кабинеты руководителя, рабочие места, 
              переговорные комнаты — под ключ с доставкой по всей России.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded font-medium text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "hsl(28,85%,52%)", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                <Icon name="LayoutGrid" size={18} />
                Каталог мебели
              </a>
              <a href="#contacts"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded font-medium border border-white/30 text-white transition-all hover:bg-white/10"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <Icon name="Phone" size={18} />
                Получить консультацию
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { num: "15 лет", label: "на рынке" },
                { num: "10 000+", label: "выполненных заказов" },
                { num: "500+", label: "моделей в наличии" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>{s.num}</div>
                  <div className="text-blue-200 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATALOG ── */}
      <section id="catalog" className="py-20" style={{ backgroundColor: "hsl(210,20%,98%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="w-10 h-1 rounded mb-4" style={{ backgroundColor: "hsl(28,85%,52%)" }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(216,60%,22%)" }}>
              Каталог мебели
            </h2>
            <p className="text-gray-500 text-lg">Все категории офисной мебели собственного производства</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <a key={i} href="#contacts"
                className="group relative overflow-hidden rounded-xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: "hsl(216,60%,22%)" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, hsl(216,65%,18%), hsl(216,55%,28%))" }} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                    <Icon name={cat.icon} fallback="Box" size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {cat.title}
                  </h3>
                  <p className="text-blue-200 text-sm mb-4">{cat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-sm font-medium">{cat.count}</span>
                    <Icon name="ArrowRight" size={18} className="text-white/60 group-hover:text-amber-400 transition-colors" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="#contacts"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded border-2 font-medium transition-all hover:bg-[hsl(216,60%,22%)] hover:text-white"
              style={{ borderColor: "hsl(216,60%,22%)", color: "hsl(216,60%,22%)", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
              Запросить полный каталог
              <Icon name="ChevronRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-10 h-1 rounded mb-4" style={{ backgroundColor: "hsl(28,85%,52%)" }} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(216,60%,22%)" }}>
                Почему выбирают<br />ГлавОфис
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Мы производим и продаём офисную мебель с 2009 года. За это время 
                оснастили более 10 000 офисов по всей России — от небольших кабинетов 
                до крупных корпоративных штаб-квартир.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Наши предметы мебели изготавливаются из высококачественных материалов. 
                Готовы изготовить мебель по индивидуальным размерам и требованиям. 
                Гарантируем качество и доступную цену.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((adv, i) => (
                <div key={i} className="p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
                  style={{ backgroundColor: "hsl(210,20%,98%)" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: "hsl(216,60%,22%)" }}>
                    <Icon name={adv.icon} fallback="Check" size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(216,60%,22%)" }}>
                    {adv.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY STEPS ── */}
      <section id="delivery" className="py-20" style={{ backgroundColor: "hsl(216,60%,22%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="w-10 h-1 rounded mx-auto mb-4" style={{ backgroundColor: "hsl(28,85%,52%)" }} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Как мы работаем
            </h2>
            <p className="text-blue-200 text-lg">Простой и прозрачный процесс — от заявки до готового офиса</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, i) => (
              <div key={i} className="relative">
                {i < deliverySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                    style={{ background: "linear-gradient(to right, rgba(255,255,255,0.3), transparent)" }} />
                )}
                <div className="relative z-10 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-5xl font-bold mb-4 leading-none"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(28,85%,52%)", opacity: 0.8 }}>
                    {step.num}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {step.title}
                  </h4>
                  <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#contacts"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "hsl(28,85%,52%)", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
              <Icon name="ArrowRight" size={18} />
              Оставить заявку
            </a>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-10 h-1 rounded mx-auto mb-4" style={{ backgroundColor: "hsl(28,85%,52%)" }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(216,60%,22%)" }}>
              Наши клиенты
            </h2>
            <p className="text-gray-500 text-lg">Оснащаем офисы в различных отраслях бизнеса</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projects.map((p, i) => (
              <div key={i}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all cursor-default"
                style={{ backgroundColor: "hsl(210,20%,98%)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "hsl(216,60%,22%)" }}>
                  <Icon name={p.icon} fallback="Building" size={22} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contacts" className="py-20" style={{ backgroundColor: "hsl(210,20%,97%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-10 h-1 rounded mb-4" style={{ backgroundColor: "hsl(28,85%,52%)" }} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(216,60%,22%)" }}>
                Свяжитесь с нами
              </h2>
              <p className="text-gray-500 text-base mb-8 leading-relaxed">
                Оставьте заявку — менеджер перезвонит в течение 30 минут 
                и поможет подобрать мебель под ваши задачи и бюджет.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "hsl(216,60%,22%)" }}>
                    <Icon name="Phone" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Телефоны</div>
                    {contacts.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s|\(|\)|-/g, "")}`}
                        className="block font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: "hsl(216,60%,22%)", fontFamily: "'Montserrat', sans-serif" }}>
                        {p}
                      </a>
                    ))}
                    <div className="text-xs text-gray-400 mt-1">8 (800) — бесплатно по России</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "hsl(216,60%,22%)" }}>
                    <Icon name="Mail" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Email</div>
                    <a href="mailto:info@glavoffice.ru"
                      className="font-medium hover:opacity-80 transition-opacity"
                      style={{ color: "hsl(216,60%,22%)" }}>
                      {contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "hsl(216,60%,22%)" }}>
                    <Icon name="MapPin" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Адрес</div>
                    <div className="text-gray-700 text-sm">г. Москва — шоурум и склад</div>
                    <div className="text-gray-500 text-xs mt-0.5">Уточните адрес по телефону</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "hsl(216,60%,22%)" }}>
                    <Icon name="Clock" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Режим работы</div>
                    <div className="text-gray-700 text-sm">{contacts.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "hsl(216,60%,22%)" }}>
                    <Icon name="CheckCheck" size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(216,60%,22%)" }}>
                    Заявка отправлена!
                  </h3>
                  <p className="text-gray-500">Мы перезвоним вам в течение 30 минут</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "hsl(216,60%,22%)" }}>
                    Оставить заявку
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">Перезвоним и поможем с выбором</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Иван Петров"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:ring-2 transition-all"
                        style={{ focusRingColor: "hsl(216,60%,22%)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:ring-2 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                        Комментарий
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Расскажите о задаче — размер офиса, нужные категории мебели..."
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:ring-2 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg text-white font-semibold transition-all hover:opacity-90 active:scale-[0.99]"
                      style={{ backgroundColor: "hsl(216,60%,22%)", fontFamily: "'Montserrat', sans-serif" }}>
                      Отправить заявку
                    </button>
                    <p className="text-center text-gray-400 text-xs">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <a href="#" className="underline hover:text-gray-600">политикой обработки данных</a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "hsl(216,65%,14%)" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded flex items-center justify-center bg-white/10">
                  <Icon name="Building2" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    ГлавОфис
                  </div>
                  <div className="text-blue-300 text-xs">офисная мебель</div>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
                Производство и продажа офисной мебели. Доставка по Москве и всей России. 
                Более 15 лет на рынке.
              </p>
            </div>

            <div>
              <div className="text-white font-semibold mb-4 text-sm uppercase tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Каталог
              </div>
              <ul className="space-y-2">
                {categories.slice(0, 5).map((c) => (
                  <li key={c.title}>
                    <a href="#catalog" className="text-blue-300 text-sm hover:text-white transition-colors">
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white font-semibold mb-4 text-sm uppercase tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Контакты
              </div>
              <ul className="space-y-2">
                {contacts.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s|\(|\)|-/g, "")}`}
                      className="text-blue-300 text-sm hover:text-white transition-colors flex items-center gap-2">
                      <Icon name="Phone" size={13} />
                      {p}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="mailto:info@glavoffice.ru"
                    className="text-blue-300 text-sm hover:text-white transition-colors flex items-center gap-2">
                    <Icon name="Mail" size={13} />
                    {contacts.email}
                  </a>
                </li>
                <li className="text-blue-300 text-sm flex items-center gap-2 mt-3">
                  <Icon name="Clock" size={13} />
                  Пн–Пт 9:00–19:00
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-blue-400 text-sm">
              © 2009–2026 ГлавОфис. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 text-sm hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-blue-400 text-sm hover:text-white transition-colors">
                Оферта
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}