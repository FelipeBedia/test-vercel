import styles from './footer.module.css';

export function Footer (){
  return (
    <footer>
      <hr></hr>
      <div className={styles.color}>
        
        <p>&copy; {new Date().getFullYear} Medevial Store Develop by FelipeBedia</p>
      </div>
    </footer>
  )
}
