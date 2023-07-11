import styles from './ErrorMessageComponent.module.css'

export default function ErrorMessageComponent(attributes){

    const {
        message
    } = attributes

    return (
        <p className={styles.container}>
            {message}
        </p>
    )

}