import "./style.scss"

const Articles = () => {
    return(
        <section id="article">
        <div className="container-1040">
          <h1>Статьи для саморазвития</h1>
          <div className="article-contents">
            <div className="content-left">
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">
                  Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя
                </p>
                <button>читать далее</button>
              </div>
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">10 Эффективных Способов Улучшить Себя Ежедневно</p>
                <button>читать далее</button>
              </div>
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">Как Развить Личные Навыки и Увеличить Продуктивность</p>
                <button>читать далее</button>
              </div>
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">Мастерство Саморазвития: Советы и Техники для Личного Роста</p>
                <button>читать далее</button>
              </div>
            </div>
            <div className="content-right">
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">Саморазвитие: Пошаговый План для Достижения Личных и Профессиональных Целей</p>
                <span className="card-desc-1">В этой статье мы рассмотрим практические шаги, которые помогут вам достичь как личных, так и профессиональных целей. Узнайте, как определить свои приоритеты, разработать план действий и создать систему для постоянного самосовершенствования. </span>
                <span className="card-desc-2">Мы расскажем о методах тайм-менеджмента, постановке целей по SMART и о том, как сохранять мотивацию на протяжении всего пути</span>
                <button>читать далее</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Articles;