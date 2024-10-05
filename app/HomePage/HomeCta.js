import styles from "../css/HomeCta.module.css"

function Background({ side }) {
    const backgroundStyle = {
      marginTop: '420px',  
      height: '100vh',
      width: '100vw',
      zIndex: -1,
      transition: 'all 0.5s ease-in-out',
    };
  
    if (side === 'left') {
      backgroundStyle.background = 'linear-gradient(to bottom, #162F0F, #3A7C27)';
      backgroundStyle.backgroundPosition = 'left';
    } else if (side === 'right') {
      backgroundStyle.background = 'linear-gradient(to left, #162F0F, #185a9d)';
      backgroundStyle.backgroundPosition = 'right';
    } else {
      backgroundStyle.background = 'linear-gradient(to bottom, #000F0F, #0072ff)';
      backgroundStyle.backgroundPosition = 'center';
    }
  
    return <div style={backgroundStyle}></div>;
  }
export default function HomeCta({side = "left"}) {
    return (
        <div className={styles.Container}>
            <Background side={side}/>
        </div>
    );
}