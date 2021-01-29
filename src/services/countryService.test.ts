import React from "react";

const countryService = require("./countryService")();

beforeAll(() => {
    global.fetch = jest.fn((): Promise<any> => {
        return Promise.resolve({
            status: 200,
            ok: true,
            json: () => {
                return Promise.resolve([
                    {
                        alpha2Code: 'US',
                        name: 'United States',
                        population: 234567
                    },
                    {
                        alpha2Code: 'FR',
                        name: 'France',
                        population: 1234
                    },
                    {
                        alpha2Code: 'CA',
                        name: 'Canada',
                        population: 123456
                    }
                ]);
            }
        })
    });
});

beforeEach(() => {
    countryService.clearFiltered();
});

afterEach(() => {
});

describe('CountryService', () => {
    describe('get()', () => {
        it('Should return countries when method is called', async (done) => {
            const getSpy = jest.spyOn(countryService, 'get');

            const countries = await countryService.get();
            expect(getSpy).toHaveBeenCalled();
            expect(countries.length).toEqual(3);

            done();
        });
    });
    describe('sortData(prop, asc)', () => {
        it('Should sort countries ascending by population', async (done) => {
            let countries = await countryService.get();

            countries = countryService.sortData('population', true);
            expect(countries.length).toEqual(3);
            expect(countries[0].name).toEqual('France');
            expect(countries[1].name).toEqual('Canada');
            expect(countries[2].name).toEqual('United States');

            done();
        });

        it('Should sort countries descending by population', async (done) => {
            let countries = await countryService.get();

            countries = countryService.sortData('population', false);
            expect(countries.length).toEqual(3);
            expect(countries[0].name).toEqual('United States');
            expect(countries[1].name).toEqual('Canada');
            expect(countries[2].name).toEqual('France');

            done();
        });

        it('Should sort countries ascending by name', async (done) => {
            let countries = await countryService.get();

            countries = countryService.sortData('name', true);
            expect(countries.length).toEqual(3);
            expect(countries[0].name).toEqual('Canada');
            expect(countries[1].name).toEqual('France');
            expect(countries[2].name).toEqual('United States');

            done();
        });

        it('Should sort countries descending by name', async (done) => {
            let countries = await countryService.get();
            expect(countries.length).toEqual(3);

            countries = countryService.sortData('name', false);
            expect(countries.length).toEqual(3);
            expect(countries[0].name).toEqual('United States');
            expect(countries[1].name).toEqual('France');
            expect(countries[2].name).toEqual('Canada');

            done();
        });
    });

    describe('searchData(text, type)', () => {
        it('Should search countries by name for text', async (done) => {
            let countries = await countryService.get();

            countries = countryService.searchData('France', 'name');
            expect(countries.length).toEqual(1);
            expect(countries[0].name).toEqual('France');

            done();
        });

        it('Should search countries by name for text case-insensitive', async (done) => {
            let countries = await countryService.get();

            countries = countryService.searchData('cana', 'name');
            expect(countries.length).toEqual(1);
            expect(countries[0].name).toEqual('Canada');

            done();
        });

        it('Should search countries by code for text', async (done) => {
            let countries = await countryService.get();

            countries = countryService.searchData('US', 'code');
            expect(countries.length).toEqual(1);
            expect(countries[0].name).toEqual('United States');

            done();
        });

        it('Should search countries by code for text case-insensitive', async (done) => {
            let countries = await countryService.get();

            countries = countryService.searchData('ca', 'code');
            expect(countries.length).toEqual(1);
            expect(countries[0].name).toEqual('Canada');

            done();
        });
    });
});
