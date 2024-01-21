export default function Section(props) {
    const sectionStyle = {
      
    }
  
    return (
      <div className="container">
        <div className="section" style={sectionStyle}>
          <img
            className="section-img-top"
            src={``}
            alt="Section cap"
          />
          <div className="section-body">
          <h3 className="section-title">{props.name}</h3>
            <p className="section-text">{props.description}</p>
          </div>
        </div>
      </div>
    );
  }
  