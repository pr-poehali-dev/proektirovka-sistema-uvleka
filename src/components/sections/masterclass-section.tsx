import { useReveal } from "@/hooks/use-reveal"

const masterclasses = [
  {
    number: "01",
    title: "Муромский калач",
    description: "Узнаете секреты приготовления знаменитого муромского калача — символа города. Замесите тесто своими руками и заберёте готовую выпечку с собой.",
    duration: "2–3 часа",
    price: "от 2 500 ₽/чел",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/6be2cf4e-d609-4403-99b5-7dd7546566d7.jpg",
  },
  {
    number: "02",
    title: "Уха по-муромски",
    description: "Приготовите настоящую муромскую уху по старинному рецепту. Шеф-повар раскроет все тонкости — от выбора рыбы до секретных специй.",
    duration: "2–3 часа",
    price: "от 3 000 ₽/чел",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/9603d2c2-dfcf-49f0-9643-36c862913a50.jpg",
  },
  {
    number: "03",
    title: "Пироги с начинкой",
    description: "Освоите искусство лепки и выпечки традиционных муромских пирогов с разными начинками: капуста, мясо, ягоды. Угощение — ваше!",
    duration: "3–4 часа",
    price: "от 2 800 ₽/чел",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/5280268d-e787-4fff-b34a-7365c52e29bd/files/4a19d197-6b3a-473d-a945-f53b476add77.jpg",
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {masterclasses.map((mc, i) => {
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
                  src={mc.image}
                  alt={mc.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-56"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="mb-1 block font-mono text-xs text-foreground/50">{mc.number} · 🕐 {mc.duration}</span>
                  <h3 className="mb-1 font-sans text-lg font-light text-foreground leading-tight">{mc.title}</h3>
                  <p className="mb-2 font-mono text-xs text-foreground/60 leading-relaxed">{mc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-foreground/70">{mc.price}</span>
                    <button className="rounded-full border border-foreground/40 bg-black/40 px-3 py-1 font-mono text-xs text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-black/60">
                      Записаться →
                    </button>
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