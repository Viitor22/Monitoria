import "./style.css";
import "../../globals.css";

const About = () => {
    return (
        <>
        <div className="container-about">
            <div className="title">
                <h2 className="h2-about">
                    Sobre a monitoria 
                </h2>
            </div>
            <div className="items">
                <div>    
                    <div className="item-container">
                        <div className="circulo">
                            
                        </div>
                    </div>
                    <p className="p-about">
                        Monitores Qualificados
                    </p>  
                </div>
                <div>
                    <div className="item-container">
                        <div className="circulo">
                            <i className="fi fi-br-brain-circuit"></i>
                        </div>
                    </div>
                        <p className="p-about">
                            Conteúdo voltado ao seu ritmo
                        </p>    
                </div>
                <div>
                    <div className="item-container">
                        <div className="circulo">
                            <i className="fi fi-br-messages"></i>
                        </div>
                    </div>
                        <p className="p-about">
                            Suporte via chat e vídeo
                        </p>    
                </div>
            </div>
        </div>
        </>
    );
}

export default About;