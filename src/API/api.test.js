import fetchData from "./api";

describe("api", () => {
  describe("fetchData", () => {
    let mockUrl;
    let mockFilm;
    beforeEach(() => {
      mockUrl = "https://swapi.co/api/films/";
      mockFilm = [
        {
          openingCrawl: "It is a dark time for the",
          title: "The Empire Strikes Back",
          year: "1980-05-17"
        }
      ];

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockFilm),
          ok: true
        })
      );
    });
    it("should fetch data with the correct param", () => {
      fetchData(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });

    it("should log an error message if the fetch is rejected", () => {});
  });
});
