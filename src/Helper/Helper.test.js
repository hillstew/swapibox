import * as helper from "./Helper";
import { getCleanPeople } from "./Helper";

describe("Helper", () => {
  describe("getCleanPeople", () => {
    let fetchData;
    let mockSpecies;
    let mockSpeciesFetch;
    let mockHomeWorld;
    let mockHomeWorldFetch;

    beforeEach(async () => {
      fetchData = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ results: [] })
        })
      );
      mockSpecies = {
        name: "Human",
        classification: "mammal",
        designation: "sentient"
      };
      mockHomeWorld = {
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid"
      };
      mockHomeWorldFetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockHomeWorld));
      mockSpeciesFetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockSpecies));
    });

    it("should call fetchData with the persons homeworld as a param", () => {
      //setup
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
