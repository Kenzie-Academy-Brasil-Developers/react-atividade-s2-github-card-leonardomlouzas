import "./styles.css";
export default function Card({ name, description, html_url, img_url }) {
  return (
    <div className="card">
      <a href={html_url} className="card_link">
        <img src={img_url} alt=""></img>
        <div className="info">
          <h3 className="title" className="title">
            {name}
          </h3>
          <p className="bio">{description}</p>
        </div>
      </a>
    </div>
  );
}
