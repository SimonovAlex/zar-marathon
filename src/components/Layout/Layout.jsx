import style from "./style.module.css";

const Layout = ({title, desc, id, urlBg, colorBg}) => {
    const styleInline = colorBg ? {backgroundColor: colorBg} : { backgroundImage: `url(${urlBg})` };

    return (
        <section className={style.root} id={id} style={styleInline}>
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
                    <div className={`${style.desc} ${style.full}`}>
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