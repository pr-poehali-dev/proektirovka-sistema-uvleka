import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const reviews = [
  {
    name: "Анна Соколова",
    city: "Москва",
    rating: 5,
    text: "Невероятный опыт! Мастер-класс по калачам оставил незабываемые впечатления. Привезла домой не только выпечку, но и массу тёплых воспоминаний.",
  },
  {
    name: "Дмитрий Орлов",
    city: "Нижний Новгород",
    rating: 5,
    text: "Фермерский тур — лучшее, что мы делали всей семьёй. Дети в восторге от коров и свежего молока прямо с фермы. Спасибо Ксении и Еве!",
  },
  {
    name: "Марина Белова",
    city: "Владимир",
    rating: 5,
    text: "Гастрономический вечер в этно-стиле — это что-то особенное. Атмосфера, блюда, рассказы о традициях — всё на высшем уровне.",
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-8 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-5xl lg:text-6xl">
                Дарим
                <br />
                вкус и
                <br />
                <span className="text-foreground/40">эмоции</span>
              </h2>
            </div>

            <div
              className={`mb-6 space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                Мы — Ксения Кудряшова и Ева Романова, основательницы МуромГастроТур. Уже 6 лет мы открываем гостям настоящий вкус Мурома: его традиции, людей и историю через еду.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                Нам важно не просто показать город, а подарить незабываемые эмоции — и при этом заботиться об окружающей среде. Каждый тур создаётся с душой и любовью к своему делу.
              </p>
            </div>

            {/* Отзывы */}
            <div
              className={`space-y-3 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="font-mono text-xs text-foreground/50">/ Отзывы гостей</p>
              {reviews.map((review, i) => (
                <div key={i} className="border-l border-foreground/20 pl-3">
                  <p className="mb-1 text-xs leading-relaxed text-foreground/70 md:text-sm">«{review.text}»</p>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-foreground/50">{review.name}</span>
                    <span className="font-mono text-xs text-foreground/30">· {review.city}</span>
                    <span className="text-xs text-foreground/40">{"★".repeat(review.rating)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-10">
            {[
              { value: "6", label: "Лет", sublabel: "На рынке гастротуризма", direction: "right" },
              { value: "4", label: "Тура", sublabel: "Уникальных программы", direction: "left" },
              { value: "0%", label: "Вреда", sublabel: "Экологичный подход", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-foreground md:text-6xl lg:text-7xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-base font-light text-foreground md:text-xl">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}

            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <div className="mb-2 flex flex-wrap gap-2">
                {["#ГастроТур", "#Муром", "#КулинарныйТур"].map((tag) => (
                  <span key={tag} className="rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 font-mono text-xs text-foreground/50">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(5)}>
                  Забронировать тур
                </MagneticButton>
                <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
                  Смотреть туры
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
