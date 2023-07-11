import UniverseView from './views/universeView/UniverseView'

import styles from './App'

export default function App() {

  console.log(process.env)

  return (
    <div className={styles.app}>
      <UniverseView />
    </div>
  )

}

