import css from './CastActors.module.css'

const CastActors = ({actors}) => {

  return (
    <div>
        {actors.map(actor => {
          return (
            <li key={actor.id} className={css.actors}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={150}
              />
              <p>{actor.name}</p>
              <p> Character: {actor.character}</p>
            </li>
          );
        })}
    </div>
  );
};

export default CastActors;