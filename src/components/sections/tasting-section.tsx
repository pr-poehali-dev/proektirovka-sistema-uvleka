import { useReveal } from "@/hooks/use-reveal"

const tastings = [
  {
    number: "01",
    title: "Хлебокомбинат",
    location: "ул. Тимирязева, Муром",
    menu: "Муромские калачи, ржаной хлеб, пироги с различными начинками, бублики",
    description: "Экскурсия по производству с дегустацией свежей выпечки прямо из печи.",
    direction: "left",
  },
  {
    number: "02",
    title: "Фермерское подворье",
    location: "Окрестности Мурома",
    menu: "Фермерский сыр, домашнее молоко, мёд разных сортов, копчёное мясо",
    description: "Знакомство с натуральными продуктами местных фермеров в живописной сельской обстановке.",
    direction: "right",
  },
  {
    number: "03",
    title: "Этно-кафе «Муромское подворье»",
    location: "Центр Мурома",
    menu: "Уха по-муромски, пельмени ручной лепки, блины с икрой, морсы и кисели",
    description: "Традиционная кухня в атмосфере русского быта XIX века с рассказом о кулинарных традициях.",
    direction: "left",
  },
]

export function TastingSection() {
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
            Дегустации
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Локации и меню</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {["#ГастроТур", "#Муром", "#КулинарныйТур"].map((tag) => (
            <span key={tag} className="rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 font-mono text-xs text-foreground/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4 md:space-y-5">
          {tastings.map((tasting, i) => {
            const getRevealClass = () => {
              if (!isVisible) return tasting.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
              return "translate-x-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:py-5 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-4 md:gap-8">
                  <span className="mt-1 font-mono text-sm text-foreground/30 group-hover:text-foreground/50 transition-colors md:text-base">
                    {tasting.number}
                  </span>
                  <div className="flex-1">
                    <div className="mb-1 flex flex-wrap items-baseline gap-3">
                      <h3 className="font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
                        {tasting.title}
                      </h3>
                      <span className="font-mono text-xs text-foreground/40">📍 {tasting.location}</span>
                    </div>
                    <p className="mb-1 font-mono text-xs text-foreground/50 md:text-sm">{tasting.description}</p>
                    <p className="font-mono text-xs text-foreground/40">
                      <span className="text-foreground/60">Меню: </span>{tasting.menu}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
