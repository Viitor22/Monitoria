import "./style.css";

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
                    <div className="curso-img">600 × 400</div>
                    <div className="curso-info">
                    <h3>Título do curso</h3>
                    <p>Aulas seg. a qua. | 19h às 22h</p>
                    <p className="descricao">
                        Aprenda os fundamentos e aprimore-se com aulas práticas e conteúdo direto ao ponto.
                    </p>
                    <button className="conheca-btn">Conheça o curso</button>
                    </div>
                </div>

                <div className="curso-card">
                    <div className="curso-img">600 × 400</div>
                    <div className="curso-info">
                    <h3>Título do curso</h3>
                    <p>Aulas seg. a qua. | 19h às 22h</p>
                    <p className="descricao">
                        Aprenda os fundamentos e aprimore-se com aulas práticas e conteúdo direto ao ponto.
                    </p>
                    <button className="conheca-btn">Conheça o curso</button>
                    </div>
                </div>

                <div className="curso-card">
                    <div className="curso-img">600 × 400</div>
                    <div className="curso-info">
                    <h3>Título do curso</h3>
                    <p>Aulas seg. a qua. | 19h às 22h</p>
                    <p className="descricao">
                        Aprenda os fundamentos e aprimore-se com aulas práticas e conteúdo direto ao ponto.
                    </p>
                    <button className="conheca-btn">Conheça o curso</button>
                    </div>
                </div>

                <div className="curso-card">
                    <div className="curso-img">600 × 400</div>
                    <div className="curso-info">
                    <h3>Título do curso</h3>
                    <p>Aulas seg. a qua. | 19h às 22h</p>
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