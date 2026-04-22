import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Туры
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Программа экскурсий</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {[
            {
              number: "01",
              title: "Традиционный Муром",
              category: "Дегустация пирогов, блинов, калачей и сыров · Хлебокомбинат · Мастер-класс по выпечке",
              price: "от 4 000 ₽/чел",
              direction: "left",
            },
            {
              number: "02",
              title: "Фермерский день",
              category: "Поездка на фермы · Дегустация молока, мёда, мяса · Знакомство с производством",
              price: "от 4 000 ₽/чел",
              direction: "right",
            },
            {
              number: "03",
              title: "Кулинарный мастер-класс",
              category: "Уха по-муромски, пирожки, муромский калач · Шеф-повар · 3–5 часов",
              price: "от 4 500 ₽/чел",
              direction: "left",
            },
            {
              number: "04",
              title: "Гастрономический вечер",
              category: "Ужин в этно-стиле · Блюда муромской кухни · История кулинарных традиций",
              price: "от 5 000 ₽/чел",
              direction: "right",
            },
          ].map((project, i) => (
            <TourCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TourCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; price: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:py-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "90%" : "95%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
        </div>
      </div>
      <span className="ml-4 shrink-0 font-mono text-xs text-foreground/50 group-hover:text-foreground/80 transition-colors md:text-sm">{project.price}</span>
    </div>
  )
}
