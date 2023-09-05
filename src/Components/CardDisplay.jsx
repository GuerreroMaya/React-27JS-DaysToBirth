import React from "react";
import moment from "moment";

const CardDisplay = ({ data }) => {
    return (
      <div>
        {data.map((person, index) => {
          const { name, dOB, imageURL } = person;
          const age = moment().diff(dOB, "years");
          const nextBirthday = moment(dOB).year(moment().year());
          const daysToBirthday = nextBirthday.diff(moment(), "days");
  
          return (
            <div className="card mb-3" key={index}>
              <div className="card-body">
                <img src={imageURL} alt="Imagen de perfil" className="mb-3" style={{ maxWidth: '100px' }} />
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Edad: {age}</p>
                <p className="card-text">
                  Días para el siguiente cumpleaños: {daysToBirthday}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  

export default CardDisplay;
