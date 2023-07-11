import { useState, useEffect } from 'react'

import ErrorMessageComponent from '../../components/errorMessageComponent/ErrorMessageComponent'

import { getBodiesOf } from '../../services/BodyService'

import styles from './UniverseView.module.css'

export default function UniverseView(){

    const [selectedBody, setSelectedBody] = useState('solar system')

    const [bodies, setBodies] = useState()
    const [fetchError, setFetchError] = useState()

    useEffect(() => {

        ;(async () => {

            try {

                const result = await getBodiesOf({ name:selectedBody })

                setBodies(result.data)

            } catch (error) {

                setFetchError('Could not fetch bodies')

            }

        })()

    }, [selectedBody])

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {
                    fetchError && (
                        <ErrorMessageComponent message={fetchError} />
                    )
                }
            </header>
            <main className={styles.main}>
                    
            </main>
            <footer className={styles.footer}>
                
            </footer>
        </div>
    )
}