import { useReveal } from "@/hooks/use-reveal"

const tours = [
  {
    number: "01",
    title: "Традиционный Муром",
    category: "Дегустация муромских пирогов, блинов, калачей и местных сыров · Посещение хлебокомбината · Мастер-класс по выпечке",
    price: "от 4 000 ₽/чел",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/4a19d197-6b3a-473d-a945-f53b476add77.jpg",
  },
  {
    number: "02",
    title: "Фермерский день",
    category: "Поездка на фермерские хозяйства · Дегустация молока, мёда и мяса · Знакомство с процессом производства",
    price: "от 4 000 ₽/чел",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/bb2a9ef0-a973-4839-9309-1ec7a1e4c7d4.jpg",
  },
  {
    number: "03",
    title: "Кулинарный мастер-класс",
    category: "Приготовление ухи по-муромски, пирожков с начинкой и муромского калача · С профессиональным шеф-поваром",
    price: "от 4 500 ₽/чел",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/0d146b92-e5d0-485e-a299-5bd585103781.jpg",
  },
  {
    number: "04",
    title: "Гастрономический вечер",
    category: "Ужин в этно-стиле с блюдами муромской кухни · Рассказ об истории местных кулинарных традиций",
    price: "от 5 000 ₽/чел",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/603f5e82-4342-410f-937a-f616b264c879.jpg",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Туры
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Программа экскурсий</p>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          {["#ГастроТур", "#Муром", "#КулинарныйТур"].map((tag) => (
            <span key={tag} className="rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 font-mono text-xs text-foreground/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {["🕐 3–5 часов", "Индивидуально — 4 000–5 000 ₽/чел", "Группа от 20 чел — 3 500 ₽/чел", "Корпоратив — от 55 000 ₽", "Семейный пакет — скидка 10%"].map((item) => (
            <span key={item} className="rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 font-mono text-xs text-foreground/70">
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {tours.map((tour, i) => {
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
                  src={tour.image}
                  alt={tour.title}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="mb-1 block font-mono text-xs text-foreground/50">{tour.number}</span>
                  <h3 className="mb-0.5 font-sans text-sm font-light text-foreground leading-tight md:text-base">{tour.title}</h3>
                  <p className="font-mono text-xs text-foreground/60">{tour.price}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="rounded-full border border-foreground/40 bg-black/40 px-4 py-1.5 font-mono text-xs text-foreground backdrop-blur-sm hover:bg-black/60">
                    Забронировать →
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
