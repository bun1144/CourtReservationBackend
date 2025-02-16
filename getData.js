const axios = require("axios")


async function getCountryData() {
    try {
        const response = await axios.get("https://countriesnow.space/api/v0.1/countries");

        // const countryNames = response.data.map(data => data.country);
        // console.log(response.data)

        const countryNames = response.data.data.map(data => data.country)


        return countryNames

    } catch (error) {
        console.error("Error fetching countries:", error);
        return false
    }
}

async function getStates(country) {
    try {
        const response = await axios.post("https://countriesnow.space/api/v0.1/countries/states", {
            country: country
        });
        if (response.data.error === false && response.data.data.states) {
            const states = response.data.data.states;

            // Map through the states array and log each state name
            const stateNames = states.map(state => state.name);
            // console.log(stateNames);
            return stateNames
        } else {
            console.log("No states data found.");
        }
    } catch (error) {
        console.error("Error fetching states:", error);
    }
}

module.exports = { getCountryData, getStates}