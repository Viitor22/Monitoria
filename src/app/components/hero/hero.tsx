import "./style.css";
import "../../globals.css";
import img from "../../assets/hero.png"

const Hero = () => {
    return (
        <>
        <div className="container">
            <div className="secao">
                <div>
                    <h2>
                        A sua formação em Ciências da Computação é importante demais pra ser deixada nas 
                        mãos de aulas que não te mostram como aprender de verdade.
                    </h2>
                    <p>
                        Ao contrário das faculdades e métodos tradicionais,<span> que jogam o conteúdo na sua frente, 
                        mas não te ensinam a raciocinar como programador </span>, nossa monitoria te guia com estratégia, 
                        prática e apoio individual para você dominar as disciplinas mais temidas do curso e sair na 
                        frente no mercado.
                        Aqui, você não vai só passar nas matérias.<span> Vai aprender como pensar como um cientista da computação</span> — desde os fundamentos até os desafios do mundo real.
                    </p>
                    <button className="botao">Quero aprender!</button>
                </div>
                <div>
                    <img src={img.src} alt="" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero;