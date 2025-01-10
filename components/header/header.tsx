export let Header = (props:any) => {
let styles = props.styles
    return (
        <div>
            <hr className={styles.hr}/>
            <h1 className={styles.header}>the blog</h1>
            <hr className={styles.hr}/>
        </div>
    );
}