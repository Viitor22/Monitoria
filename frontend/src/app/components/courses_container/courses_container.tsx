import "./style.css";
import backend from "../../assets/backend.jpg"
import frontend from "../../assets/frontend.jpg"
import devops from "../../assets/devops.jpg"
import ia from "../../assets/ia.jpg"


const CoursesContainer = () => {
    return(
        <>
            <main className="main-content">
                <section className="intro">
                <h2><span>VAGAS LIMITADAS</span> <span className="tag-icon">🏷️</span></h2>
                <h1>Cursos</h1>
                </section>

                <section className="cursos-grid">
                <div className="curso-card">
                    <div className="curso-img">
                        <img src={frontend.src} alt="" />
                    </div>
                    <div className="curso-info">
                    <h3>Trilha Front-End</h3>
                    <p>Aulas seg. a qua. | 19h às 22h</p>
                    <p className="descricao">
                        Aprenda os fundamentos e aprimore-se com aulas práticas e conteúdo direto ao ponto.
                    </p>
                    <button className="conheca-btn">Conheça o curso</button>
                    </div>
                </div>
                <div className="curso-card">
                    <div className="curso-img">
                        <img src={backend.src} alt="" />
                    </div>
                    <div className="curso-info">
                    <h3>Trilha Back-End</h3>
                    <p>Aulas ter. a qui. | 19h às 22h</p>
                    <p className="descricao">
                        Aprenda os fundamentos e aprimore-se com aulas práticas e conteúdo direto ao ponto.
                    </p>
                    <button className="conheca-btn">Conheça o curso</button>
                    </div>
                </div>

                <div className="curso-card">
                    <div className="curso-img">
                        <img src={ia.src} alt="" />
                    </div>
                    <div className="curso-info">
                    <h3>Trilha Análise de dados e IA</h3>
                    <p>Aulas seg. a qua. | 18 às 21h</p>
                    <p className="descricao">
                        Aprenda os fundamentos e aprimore-se com aulas práticas e conteúdo direto ao ponto.
                    </p>
                    <button className="conheca-btn">Conheça o curso</button>
                    </div>
                </div>

                <div className="curso-card">
                    <div className="curso-img">
                        <img src={devops.src} alt="" />
                    </div>
                    <div className="curso-info">
                    <h3>Trilha DevOPS</h3>
                    <p>Aulas ter. a qui. | 18 às 21h</p>
                    <p className="descricao">
                        Aprenda os fundamentos e aprimore-se com aulas práticas e conteúdo direto ao ponto.
                    </p>
                    <button className="conheca-btn">Conheça o curso</button>
                    </div>
                </div>
                </section>
            </main>
        </>
    )
}

export default CoursesContainer