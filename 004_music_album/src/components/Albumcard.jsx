function Albumcard(props){
    const cardClass=`album-card ${props.isActive ? 'active' : ''}`
    return(
        <div className={cardClass}>
            <img src={props.coverUrl} alt={props.title} />
            <h4> {props.title} </h4>
            <p> {props.artist} </p>
        </div>

    );
}

export default Albumcard