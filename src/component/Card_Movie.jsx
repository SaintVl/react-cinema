function Card (props) {

    const {
        Title: title,
        Year: year,
        imdbID : id,
        Type: type,
        Poster: poster,
    } = props;

    return <div id={id} className="card">
    <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={poster} alt=""/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
        {title}
      </span>
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>

}

export {Card}