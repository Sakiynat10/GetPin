const BreadCrumbs = (...path) => {
    console.log(path[0].path1)
    return(
        <ul className={"bread-crumb"}>
            <li>
                <a href={path[0].path1}>{path[0].path1}</a>
            </li>
            <li>
                <a href="">{path[0].path2}</a>
            </li>
        </ul>
    )
}

export default BreadCrumbs;