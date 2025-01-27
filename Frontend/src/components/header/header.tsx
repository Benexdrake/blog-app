export let Header = (props:any) => {
const styles = props.styles
const header = props.header;
    return (
        <div>
            <hr className={styles.hr}/>
            <h1 className={styles.header}>{header}</h1>
            <hr className={styles.hr}/>
        </div>
    );
}