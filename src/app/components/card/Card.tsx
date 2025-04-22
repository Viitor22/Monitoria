interface CardProps {
  title: string;
  text: string;
  image: string;
}

const Card = ({ title, text, image }: CardProps) => {
  return (
    <div className="card-container">
      <img className="card-img" src={image} alt="Imagem do card" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
