import Lock from '../assets/icons/Lock'

function Project(props) {
    const { name, date, url, description } = props.project
    const isDisabled = !url || url === "#"

    return (
        <div className="projectItem">
            <p className="projectName">
                {isDisabled
                    ? <span className="disabled">{name}<Lock fill="var(--disabled)" /></span>
                    : <a href={url}>{name}</a>}
            </p>
            <p className="projectDescription">{description}</p>
        </div>
    )
}

export default Project