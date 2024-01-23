export default function Section(props) {
    const styles = {
      containerStyle:{
        padding: '5%',
        background: '#f5e9f1',
        height: "100%"
      },
      titleStyle: {
        fontSize: 30
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
  