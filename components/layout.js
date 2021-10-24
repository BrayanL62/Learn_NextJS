// Importer le fichier CSS pour pouvoir l'utiliser.
import styles from './layout.module.css'


export default function Layout({ children }) {
    // Attribuer le className styles.container (container étant la classe à personnaliser comme souhaité.)
    // Le {children} correspond à ce qui sera entouré par les balises Layout.
    return <div className={styles.container}>{children}</div>
  }
  