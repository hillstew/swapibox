import * as helper from "./Helper";
import { getCleanPeople } from "./Helper";
import * as api from "../API/api"

describe("Helper", () => {
  describe("getCleanPeople", () => {
    let fetchData;
    let mockSpecies;
    let mockSpeciesFetch;
    let mockHomeWorld;
    let mockHomeWorldFetch;

    beforeEach(async () => {
      mockHomeWorld = {
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid"
      };
      mockSpecies = {
        name: "Human",
        classification: "mammal",
        designation: "sentient"
      };
      mockHomeWorldFetch = jest.fn().mockImplementation(() => 
      Promise.resolve(mockHomeWorld));
      mockSpeciesFetch = jest.fn().mockImplementation(() => 
      Promise.resolve(mockSpecies));
    });
    
    it.skip("should call fetchData with the persons homeworld as a param", () => {
      //setup
      api.fetchData = jest.fn(() => mockHomeWorld)
      
      let mockPeople = [
        { name: "Luke Skywalker", height: "172", mass: "77" },
        { name: "C-3PO", height: "167", mass: "75" }
      ];
      //execution
      helper.getCleanPeople(mockPeople)
      //expectation
      expect(fetchData).toHaveBeenCalledWith(mockHomeWorld)
    });

    it.skip("should call fetchData with the persons species as a param", () => {});

    it.skip("should call Promise.all with the correct params", () => {});
  });
});
