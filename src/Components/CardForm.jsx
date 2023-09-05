import React, { useState } from "react";

const CardForm = ({ setData }) => {
  const [name, setName] = useState("");
  const [dOB, setDOB] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, { name, dOB, imageURL }]);
  };


  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de Nacimiento</label>
            <input
              type="date"
              className="form-control"
              value={dOB}
              onChange={(event) => setDOB(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">URL de la imagen</label>
            <input
                type="text"
                className="form-control"
                value={imageURL}
                onChange={(event) => setImageURL(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
