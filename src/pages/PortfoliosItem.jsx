
function PortfoliosItem({
    project: {title, img, desciption, demo, source}
}) {


    const getImgUrl = (path) => {
        return new URL(`/src/assets/${path}`, import.meta.url).href;
    }
    return (
<div className="project-card-container between-margin">
    <div className="card-content">
        <img src={getImgUrl(img)} alt={`img of ${title}`} className="project-image" />
        <h2 className="project-title">{title}</h2>
        <p className="project-description ">{desciption}</p>
        <div className="links">
            <a href={demo} target="_blank" rel="noopener noreferrer" className="link">
                Deploy
            </a>
            <a href={source} target="_blank" rel="noopener noreferrer" className="link">
                Source
            </a>
        </div>
    </div>
</div>
    )
}

export default PortfoliosItem
