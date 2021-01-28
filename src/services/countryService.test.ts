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
                        name: 'United States',
                        population: 234567
                    },
                    {
                        name: 'France',
                        population: 1234
                    },
                    {
                        name: 'Canada',
                        population: 123456
                    }
                ]);
            }
        })
    });
});

beforeEach(() => {
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
});
