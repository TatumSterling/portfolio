import './Section.css'

export default function Section(props) {
    const styles = {
      containerStyle:{
        padding: '5%',
        background: '#f5e9f1',
        height: "100%",
        animation: 'fadeIn 1s ease-in-out'
      },
      titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        background: '#e3b3cb',
        padding: '10px'
      },
      paragraphStyle: {
        fontSize: 25
      }
    }
  
    return (
      <div className="container" style={styles.containerStyle}>
        <div className="section" >
          <div className="section-body">
          <h3 className="section-title" style={styles.titleStyle}>{props.name}</h3>
            <p className="section-text" style={styles.paragraphStyle}>{props.description}</p>

          </div>
        </div>
      </div>
    );
  }
  