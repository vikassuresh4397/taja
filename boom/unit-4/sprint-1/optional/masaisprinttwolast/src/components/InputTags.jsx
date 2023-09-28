import React, { useState } from 'react';
import Card from './Card';

const InputTags = ({ superheroList, setSuperheroList }) => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [power, setPower] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && height && weight && power) {
      const newSuperhero = {
        name,
        height,
        weight,
        power,
      };
      setSuperheroList([...superheroList, newSuperhero]);
      setName("");
      setHeight(0);
      setWeight(0);
      setPower(0);
    }
  };

  const handleMostPowerful = () => {
    if (superheroList.length > 0) {
      const mostPowerfulHero = [...superheroList].sort((a, b) =>
        a.power < b.power ? 1 : -1
      )[0];
      const filteredHeroList = superheroList.filter(
        (hero) => hero.power !== mostPowerfulHero.power
      );
      setSuperheroList([mostPowerfulHero, ...filteredHeroList]);
    }
  };

  const handleShowAll = () => {
    setSuperheroList([...superheroList]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="input-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          data-testid="input-height"
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          data-testid="input-weight"
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          data-testid="input-power"
          type="text"
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />
        <button
          data-testid="add-button"
          type="submit"
          disabled={!name || !height || !weight || !power}
        >
          Add SuperHero
        </button>
      </form>
      <button
        data-testid="most-powerfull"
        onClick={handleMostPowerful}
        disabled={superheroList.length <= 1}
      >
        Most Powerful Superhero
      </button>
      <button
        data-testid="all-superheroes"
        onClick={handleShowAll}
        disabled={superheroList.length <= 1}
      >
        Show All
      </button>
      <Card data={superheroList} />
    </>
  );
};

export default InputTags;