import styles from './InfoPanelComponent.module.css'

export default function InfoPanelComponent(attributes){

    const {
        children
    } = attributes

    return (
        <>
            {
                children && (
                    <div className={styles.container}>
                        {children}
                    </div>
                )
            }
        </>
    )

}