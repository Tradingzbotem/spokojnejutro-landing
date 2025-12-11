// app/bright-future/page.tsx
'use client';

type InfoCardProps = {
  title: string;
  badge: string;
  text: string;
};

function InfoCard({ title, badge, text }: InfoCardProps) {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <div className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-700">
        {badge}
      </div>
      <h3 className="mt-3 text-sm font-semibold text-slate-900 md:text-base">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

export default function BrightFutureLanding() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* TOP BAR / NAV */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
              SJ
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">
                spokojnejutro.com
              </span>
              <span className="text-[11px] text-slate-500">
                Ubezpieczenia na życie &amp; emerytura
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-6 text-xs font-semibold text-slate-700 md:flex">
            <a 
              href="#o-mnie" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('o-mnie')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-sky-700"
            >
              O mnie
            </a>
            <a 
              href="#kontakt" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-sky-700"
            >
              Kontakt
            </a>
          </nav>

          {/* Phone / hours */}
          <div className="flex items-center gap-4 text-xs md:text-sm">
            <div className="hidden flex-col items-end text-slate-600 md:flex">
              <span className="font-semibold text-slate-800">Zadzwoń</span>
              <span className="font-bold text-sky-700">+48 504 858 550</span>
            </div>
            <div className="hidden flex-col text-right text-[11px] text-slate-500 md:flex">
              <span>
                pn. – pt.{" "}
                <span className="font-semibold text-slate-700">
                  8:00 – 21:00
                </span>
              </span>
              <span>
                sob.{" "}
                <span className="font-semibold text-slate-700">
                  9:00 – 17:00
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-10 md:flex-row md:py-16">
          {/* Left – text */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Ubezpieczenie na życie,{" "}
              <span className="text-sky-700">
                które zadba o Twoją przyszłą emeryturę
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-700 md:text-base">
              Zbuduj dodatkowy kapitał na jesień życia i zabezpiecz bliskich na
              wypadek nieprzewidzianych sytuacji. Prosty plan, jasne zasady, bez
              finansowego żargonu.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-full bg-lime-400 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-lime-500"
              >
                Porównaj opcje i umów rozmowę
              </a>
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400"
              >
                Dowiedz się więcej
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Kilka pytań wystarczy, by dopasować rozwiązanie do Twojego wieku,
              dochodów i planów na przyszłość.
            </p>
          </div>

          {/* Right – visual / photo placeholder */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md">
              <div className="flex h-56 items-center justify-center rounded-3xl border border-slate-200 bg-sky-50 px-6 text-sm text-slate-600">
                Twój plan może wyglądać inaczej niż przeciętna emerytura w Polsce. 
                Porozmawiajmy, jak ją poukładać krok po kroku.
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-sky-700 px-4 py-3 text-xs font-semibold text-white shadow-lg md:text-sm">
                Plan od{" "}
                <span className="text-lime-300">XX zł / mies.</span> – dopasowany
                do Ciebie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARZ KONTAKTOWY */}
      <section id="kontakt" className="border-b border-slate-200 bg-sky-50/60 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Porozmawiajmy o Twojej przyszłej emeryturze
              </h2>
              <p className="mt-2 text-sm text-slate-700 md:text-base">
                Zostaw swoje dane, odezwę się i pomogę dobrać rozwiązanie, które
                będzie pasowało do Twojej sytuacji. Bez zobowiązań i nacisku.
              </p>

              <form 
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 space-y-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-sky-500"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500"
                      placeholder="+48 ..."
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500"
                      placeholder="twoj@email.pl"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Preferowana godzina kontaktu
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500"
                      placeholder="np. 17:00–19:00"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Twoje pytanie / oczekiwania
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500"
                    rows={3}
                    placeholder="Napisz, co jest dla Ciebie najważniejsze (wysokość przyszłej emerytury, zabezpieczenie rodziny, kredyt itp.)"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    id="zgoda"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-700"
                  />
                  <label
                    htmlFor="zgoda"
                    className="text-[11px] text-slate-600"
                  >
                    Wyrażam zgodę na kontakt telefoniczny / e-mail w celu
                    przedstawienia informacji o ubezpieczeniach na życie oraz
                    dodatkowych rozwiązaniach emerytalnych. Zgodę możesz wycofać
                    w dowolnym momencie.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-lime-500"
                >
                  Wyślij zgłoszenie
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-between gap-4 text-sm text-slate-700">
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">
                  Jak wygląda kontakt?
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-700 md:text-sm">
                  <li>Najpierw krótka rozmowa, żeby poznać Twoją sytuację.</li>
                  <li>Potem przedstawiam 2–3 rozwiązania i tłumaczę różnice.</li>
                  <li>Decyzję podejmujesz na spokojnie, bez presji.</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-sky-800 p-5 text-white">
                <p className="text-xs uppercase tracking-wide text-sky-100">
                  Wolisz zadzwonić samodzielnie?
                </p>
                <p className="mt-2 text-lg font-semibold">+48 504 858 550</p>
                <p className="mt-1 text-[11px] text-sky-100">
                  pn.–pt. 8:00–21:00, sob. 9:00–17:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WYBÓR ROZWIĄZANIA – 3 KAFELKI */}
      <section className="bg-sky-50/60 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
            Wybierz rozwiązanie dla siebie
          </h2>
          <p className="mt-3 text-center text-sm text-slate-600 md:text-base">
            Możesz skupić się tylko na ochronie życia, połączyć ją z odkładaniem
            na emeryturę albo zabezpieczyć rodzinę i kredyt.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 h-40 w-full rounded-2xl bg-slate-100 flex items-center justify-center">
                <img
                  src="/zdrowie.jpg"
                  alt="Ochrona życia"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Ochrona życia
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                Wypłata dla bliskich, gdy Ciebie zabraknie. Proste zasady,
                bez skomplikowanych dodatków.
              </p>
              <button className="mt-4 self-start rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-800 hover:border-sky-500">
                Sprawdź szczegóły
              </button>
            </div>

            <div className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 h-40 w-full rounded-2xl bg-slate-100 flex items-center justify-center">
                <img
                  src="/życie i emerytura.jpg"
                  alt="Życie i emerytura"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Życie + emerytura
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                Łączysz ochronę życia z odkładaniem na dodatkowy kapitał,
                który wykorzystasz po zakończeniu pracy.
              </p>
              <button className="mt-4 self-start rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-800 hover:border-sky-500">
                Sprawdź szczegóły
              </button>
            </div>

            <div className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 h-40 w-full rounded-2xl bg-slate-100 flex items-center justify-center">
                <img
                  src="/kredyt.jpg"
                  alt="Rodzina i kredyt"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Rodzina &amp; kredyt
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                Zabezpieczenie rodziny i spłaty zobowiązań (np. kredytu
                hipotecznego), jeśli wydarzy się coś poważnego.
              </p>
              <button className="mt-4 self-start rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-800 hover:border-sky-500">
                Sprawdź szczegóły
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA „POTRZEBUJESZ POMOCY?” */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-sky-800 px-6 py-8 text-white md:flex-row md:px-10">
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">
                Potrzebujesz pomocy?
              </h3>
              <p className="mt-2 text-sm text-sky-100 md:text-base">
                Porozmawiaj z doradcą, który spokojnie wyjaśni różnice
                między rozwiązaniami i pomoże dobrać składkę.
              </p>
            </div>
            <div className="text-right text-sm">
              <p className="text-sky-100">Zadzwoń teraz</p>
              <p className="text-2xl font-bold leading-tight">+48 504 858 550</p>
              <p className="mt-1 text-xs text-sky-200">
                pn.–pt. 8:00–21:00, sob. 9:00–17:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IKONKI / OBSZARY OCHRONY */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
            Co możesz zabezpieczyć z spokojnejutro.com?
          </h2>
          <div className="mt-8 grid gap-px rounded-3xl bg-slate-200 md:grid-cols-4">
            {[
              "Przyszłą emeryturę",
              "Rodzinę i dzieci",
              "Kredyt hipoteczny",
              "Dochód w razie choroby",
              "Koszty leczenia",
              "Nieprzewidziane wypadki",
              "Długoterminowe oszczędności",
              "Spokój psychiczny",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center bg-white px-4 py-6 text-center text-xs font-semibold text-sky-800 md:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O MNIE */}
      <section
        id="o-mnie"
        className="border-t border-slate-200 bg-white py-12 md:py-16"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 md:flex-row md:items-start">
          <div className="flex-shrink-0">
            <div className="h-40 w-40 overflow-hidden rounded-full border border-slate-200 bg-slate-100 md:h-48 md:w-48">
              <img
                src="/julia-cynka.jpeg"
                alt="Julia Cynka – Reprezentant dla OVB"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-700 md:text-base">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              O mnie
            </h2>
            <p className="font-semibold text-slate-900">
              Julia Cynka – Reprezentant dla OVB
            </p>
            <p>
              Nazywam się Julia Cynka i jestem reprezentantem firmy OVB. Moją działalnością wspieram klientów w uporządkowaniu kwestii przyszłej emerytury oraz zabezpieczenia rodziny. Pracuję w międzynarodowej, renomowanej firmie z branży finansowej, działającej od ponad 55 lat na rynku europejskim, dzięki czemu opieram swoje działania na sprawdzonych i bezpiecznych rozwiązaniach.
            </p>
            <p>
              Wyjaśniam wszystko w prosty, zrozumiały sposób, bez sprzedażowego nacisku — zależy mi, abyś dokładnie wiedział/a, na co się decydujesz. W procesie podejmowania tak ważnych decyzji wyróżnia mnie empatia, uważność oraz pełne zrozumienie potrzeb moich klientów. Moim celem jest zapewnienie najwyższego poziomu satysfakcji i poczucia bezpieczeństwa.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Spotkania online, telefonicznie lub osobiste – tak jak Ci wygodniej.
              </li>
              <li>Porównuję oferty kilku towarzystw, nie jednego produktu.</li>
              <li>Pomagam również po podpisaniu umowy – przy zmianach i pytaniach.</li>
            </ul>
            <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Telefon
                </p>
                <p className="text-sm font-semibold text-sky-700">
                  +48 504 858 550
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  E-mail
                </p>
                <p className="text-sm font-semibold text-sky-700">
                  julia.cynka@ovb.com.pl
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Biuro
                </p>
                <p className="text-sm font-semibold text-sky-700">
                  ul. Mazowiecka 7/U1, 00-052 Warszawa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORÓWNUJEMY DLA CIEBIE – 3 KARTY */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
            Co dokładnie dla Ciebie porównujemy?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Zakres ochrony"
              badge="Co obejmuje polisa?"
              text="Sprawdzamy, w jakich sytuacjach polisa wypłaci środki – od poważnych zachorowań, przez wypadki, po śmierć ubezpieczonego."
            />
            <InfoCard
              title="Wysokość świadczeń"
              badge="Ile otrzymają bliscy?"
              text="Porównujemy sumy ubezpieczenia i możliwe warianty, abyś wiedział, jaką realną pomoc finansową dostanie rodzina."
            />
            <InfoCard
              title="Składka i elastyczność"
              badge="Ile zapłacisz co miesiąc?"
              text="Pokazujemy różnice w składkach oraz to, czy możesz je zmieniać w trakcie trwania umowy, bez utraty ochrony."
            />
          </div>
        </div>
      </section>

      {/* FOOTER / DISCLAIMER */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8 text-[11px] text-slate-500 md:text-xs">
          <p className="font-semibold text-slate-700">Informacja prawna</p>
          <p className="mt-2">
            Informacje na tej stronie mają charakter edukacyjny i marketingowy.
            Nie stanowią indywidualnej porady inwestycyjnej, podatkowej ani
            ubezpieczeniowej. Ostateczne warunki ochrony oraz wysokość świadczeń
            zależą od wybranego towarzystwa ubezpieczeniowego, zakresu umowy i
            Twojej sytuacji życiowej.
          </p>
        </div>
      </footer>
    </main>
  );
}
