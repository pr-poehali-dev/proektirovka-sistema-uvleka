import { useReveal } from "@/hooks/use-reveal"

const tastings = [
  {
    number: "01",
    title: "Хлебокомбинат",
    location: "ул. Тимирязева, Муром",
    menu: "Муромские калачи, ржаной хлеб, пироги с различными начинками, бублики",
    description: "Экскурсия по производству с дегустацией свежей выпечки прямо из печи.",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/4a37b678-834e-4153-8ed0-79d3f5ae3e41.jpg",
  },
  {
    number: "02",
    title: "Фермерское подворье",
    location: "Окрестности Мурома",
    menu: "Фермерский сыр, домашнее молоко, мёд разных сортов, копчёное мясо",
    description: "Знакомство с натуральными продуктами местных фермеров в живописной сельской обстановке.",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/bb2a9ef0-a973-4839-9309-1ec7a1e4c7d4.jpg",
  },
  {
    number: "03",
    title: "Этно-кафе «Муромское подворье»",
    location: "Центр Мурома",
    menu: "Уха по-муромски, пельмени ручной лепки, блины с икрой, морсы и кисели",
    description: "Традиционная кухня в атмосфере русского быта XIX века с рассказом о кулинарных традициях.",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/c372bc24-be2f-418f-8d13-add24c547383.jpg",
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {tastings.map((tasting, i) => {
            const getRevealClass = () => {
              if (!isVisible) return "translate-y-12 opacity-0"
              return "translate-y-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-lg transition-all duration-700 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <img
                  src={tasting.image}
                  alt={tasting.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-56"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="mb-1 block font-mono text-xs text-foreground/50">{tasting.number} · 📍 {tasting.location}</span>
                  <h3 className="mb-1 font-sans text-lg font-light text-foreground leading-tight">{tasting.title}</h3>
                  <p className="mb-1 font-mono text-xs text-foreground/60 leading-relaxed">{tasting.description}</p>
                  <p className="font-mono text-xs text-foreground/50">
                    <span className="text-foreground/70">Меню: </span>{tasting.menu}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}