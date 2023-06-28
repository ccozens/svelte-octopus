import {API_KEY} from '$env/static/private';
/* types from chatGPT */
/* type Result = {
    consumption: number;
    interval_start: string;
    interval_end: string;
  };

  type Results = Result[];

  type Response = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Results;
  }; */

const url_octopus_base = 'https://api.octopus.energy/v1/';
const url_product_info = 'products/VAR-22-11-01/';
const electricity_mpan = '1100014427292';
const electricity_serial_number = '18P0186373';
const gas_mprn = '2172607710';
const gas_serial_number = 'G4P01618981800';
// const url_electricity = 'electricity-meter-points/1100014427292/meters/18P0186373/consumption/';
// const url_gas = 'gas-meter-points/2172607710/meters/G4P01618981800/consumption/';
const url_electricity = `electricity-meter-points/${electricity_mpan}/meters/${electricity_serial_number}/consumption/`;
const url_gas = `gas-meter-points/${gas_mprn}/meters${gas_serial_number}/consumption/`;

async function fetchFromOctopus(url: string, parameters?: Parameters) {
    let completeUrl: string ;
    // assemble URL if parameters passed in
    if (parameters) {
    const {period_from, period_to, page_size} = parameters;
    completeUrl = `${url}?period_from=${period_from}&period_to=${period_to}&page_size=${page_size}`}
    else {completeUrl = url}

    const response = await fetch(completeUrl, {
        headers: {
            'X-Api-Key': API_KEY,
            Authorization: `Basic ${Buffer.from(API_KEY).toString(
                'base64'
            )}`,
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
}

interface Parameters {
    period_from: string;
    period_to: string;
    page_size: number;
    order_by?: string;
}

const parameters: Parameters = {
    period_from: '2023-02-01T00:00:00Z', //start date
    period_to: '2023-02-28T00:00:00Z', //end date
    page_size: 1000, // page size of returned results
    order_by: 'period', // order from oldest to newest
};

import { sample } from './sample'

export function load() {
    const elecData = sample;
    // const elecData = fetchFromOctopus(url_octopus_base + url_electricity, parameters);
    // const gasData = fetchFromOctopus(url_octopus_base + url_gas, parameters);
    // const productInfo = fetchFromOctopus(url_octopus_base + url_product_info)
    // const data = {elecData, gasData, productInfo}
    // return data
    return elecData
}