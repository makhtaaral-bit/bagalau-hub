const SERVICES = [
  {
    title: 'Бағалаушы',
    subtitle: 'Бағалау нысаны',
    href: 'https://bagalauform.jumis-maktaaral.kz',
  },
  {
    title: 'Арнаулы әлеуметтік қызметтер',
    subtitle: 'Өтініш нысандары',
    href: 'https://otinishform.jumis-maktaaral.kz',
  },
  {
    title: 'Тұрмыстық жағдайды тексеру',
    subtitle: 'Акт нысаны',
    href: 'https://turmistikakt.jumis-maktaaral.kz',
  },
  {
    title: 'Жолдама',
    subtitle: 'Жолдама нысаны',
    href: 'https://zholdama.jumis-maktaaral.kz',
  },
]

export default function HomePage() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-icon">🏛️</div>
        <div>
          <h1 className="title">Мақтаарал ауданы</h1>
          <p className="subtitle">Электронды нысандар порталы</p>
        </div>
      </header>

      <main className="grid">
        {SERVICES.map((s) => (
          <a key={s.href} className="card" href={s.href} target="_top" rel="noopener">
            <span className="card-title">{s.title}</span>
            <span className="card-subtitle">{s.subtitle}</span>
            <span className="card-arrow">→</span>
          </a>
        ))}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Мақтаарал ауданы әкімдігі</p>
      </footer>
    </div>
  )
}
