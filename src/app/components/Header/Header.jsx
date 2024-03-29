import styles from "./index.module.css"; // Certifique-se de ter um arquivo CSS separado

function Header() {
  return (
    <header className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles.bannerContent}>
        {/* Conteúdo do banner, como texto ou outros elementos */}
        <h1>The Coffezinho</h1>
        <p>Open from 6am to 17pm</p>
        <p>15 Adr street, 5015</p>
      </div>
    </header>
  );
}

export default Header;
