import fetchData from "../API/api";

const getCleanPeople = async people => {
  let cleanPeople = people.map(async person => {
    let homeworld = await fetchData(person.homeworld);
    console.log(homeworld)
    let species = await fetchData(person.species[0]);
    return {
      name: person.name,
      homeworld: homeworld.name,
      species: species.name,
      population: homeworld.population,
    };
  });
  return Promise.all(cleanPeople);
};


const getCleanPlanets = async planets => {
  let cleanPlanets = planets.map(async planet => {
    let residents = [];
    if (planet.residents.length >= 1) {
      planet.residents.forEach(async residentUrl => {
        var resident = await fetchData(residentUrl);
        residents.push(resident.name);
      });
    }
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: "in progress",
    };
  });
  return Promise.all(cleanPlanets);
};

const getCleanVehicles = vehicles => {
  let cleanVehicles = vehicles.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers,
    };
  });
  return cleanVehicles;
};

export { getCleanVehicles, fetchData, getCleanPeople, getCleanPlanets };
