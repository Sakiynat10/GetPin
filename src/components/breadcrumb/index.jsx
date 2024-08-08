const BreadCrumbs = (...path) => {
    console.log(path[0].path1)
    return(
        <ul className={"bread-crumb"}>
            <li>
                <a href="/">Главная</a>
            </li>
            <li>
                <a href="/">Мой профиль</a>
            </li>
        </ul>
    )
}

export default BreadCrumbs;