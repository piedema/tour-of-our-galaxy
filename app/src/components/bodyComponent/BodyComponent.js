import styles from 'BodyComponent.module'

export default function Body(attributes){

    const {
        children,
    } = attributes

    return (
        <div className={styles.container}>
            This is a body
        </div>
    )

}