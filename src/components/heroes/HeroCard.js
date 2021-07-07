import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  console.log(heroImages[`${id}.jpg`].default);
  return (
    <div className="col">
      <div className="card " style={{ maxWidth: 540 }}>
        <div className="row">
          <div className="col-4">
            <img
              src={heroImages[`${id}.jpg`].default}
              className="card-img-top h-100"
              alt={superhero}
            />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {
                  (alter_ego !== characters) &&
                  <p>
                      {characters}
                  </p>
              }

              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`./heroe/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
