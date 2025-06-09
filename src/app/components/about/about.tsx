import "./style.css";
import "../../globals.css";

import { LuBrain } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

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
                            <FaRegCheckCircle className="icon"/>
                        </div>
                    </div>
                    <p className="p-about">
                        Monitores Qualificados
                    </p>  
                </div>
                <div>
                    <div className="item-container">
                        <div className="circulo">
                            <LuBrain className="icon"/>
                        </div>
                    </div>
                        <p className="p-about">
                            Conteúdo voltado ao seu ritmo
                        </p>    
                </div>
                <div>
                    <div className="item-container">
                        <div className="circulo">
                            <MdMessage className="icon"/>
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