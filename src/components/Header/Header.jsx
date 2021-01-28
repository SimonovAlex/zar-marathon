import style from "./style.module.css"

const Header = () => {
    return (
        <header className={style.root}>
            <div className={style.forest} />
            <div className={style.container}>
                <h1>This is title</h1>
                <p>This is Description!</p>
            </div>
        </header>
    )
};

export default Header