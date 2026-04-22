import { useReveal } from "@/hooks/use-reveal"

const masterclasses = [
  {
    number: "01",
    title: "Муромский калач",
    description: "Узнаете секреты приготовления знаменитого муромского калача — символа города. Замесите тесто своими руками и заберёте готовую выпечку с собой.",
    duration: "2–3 часа",
    price: "от 2 500 ₽/чел",
    direction: "left",
  },
  {
    number: "02",
    title: "Уха по-муромски",
    description: "Приготовите настоящую муромскую уху по старинному рецепту. Шеф-повар раскроет все тонкости — от выбора рыбы до секретных специй.",
    duration: "2–3 часа",
    price: "от 3 000 ₽/чел",
    direction: "right",
  },
  {
    number: "03",
    title: "Пироги с начинкой",
    description: "Освоите искусство лепки и выпечки традиционных муромских пирогов с разными начинками: капуста, мясо, ягоды. Угощение — ваше!",
    duration: "3–4 часа",
    price: "от 2 800 ₽/чел",
    direction: "left",
  },
]

export function MasterclassSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Мастер-классы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Готовим вместе с шеф-поваром</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {["#ГастроТур", "#Муром", "#КулинарныйТур"].map((tag) => (
            <span key={tag} className="rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 font-mono text-xs text-foreground/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4 md:space-y-5">
          {masterclasses.map((mc, i) => {
            const getRevealClass = () => {
              if (!isVisible) return mc.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
              return "translate-x-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group flex items-start justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:py-5 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex gap-4 md:gap-8">
                  <span className="mt-1 font-mono text-sm text-foreground/30 group-hover:text-foreground/50 transition-colors md:text-base">
                    {mc.number}
                  </span>
                  <div>
                    <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
                      {mc.title}
                    </h3>
                    <p className="mb-2 max-w-lg font-mono text-xs text-foreground/50 md:text-sm">{mc.description}</p>
                    <span className="font-mono text-xs text-foreground/40">🕐 {mc.duration}</span>
                  </div>
                </div>
                <div className="ml-4 flex shrink-0 flex-col items-end gap-2">
                  <span className="font-mono text-xs text-foreground/50 group-hover:text-foreground/80 transition-colors md:text-sm">{mc.price}</span>
                  <button className="rounded-full border border-foreground/30 bg-foreground/10 px-3 py-1 font-mono text-xs text-foreground/70 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-foreground/20 hover:text-foreground">
                    Записаться →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
