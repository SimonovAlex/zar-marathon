import style from "./style.module.css";

const Layout = ({title, desc, id}) => {
    return (
        <section className={style.root} id={id}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.wrapper}>
                        {title && (
                            <h3>
                                {title}
                            </h3>
                        )}
                        <span className={style.separator} />
                    </div>
                    <div className={style.desc + ' ' + style.full}>
                        {desc && (
                            <p>
                                {desc}
                            </p>
                        )}

                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout;