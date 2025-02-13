const countries = ["Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Bulgaria", "Romania", "Croatia", "United Kingdom", "Kosovo", "United States", "Canada", "Australia", "Japan", "China", "India", "Brazil", "Mexico"];
const schengenCountries = ["Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Bulgaria", "Romania", "Croatia"];
const ossCountries = ["United Kingdom", "Switzerland"];

function populateSelects() {
    const originSelect = document.getElementById("origin");
    const destinationSelect = document.getElementById("destination");

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        originSelect.appendChild(option.cloneNode(true));
        destinationSelect.appendChild(option);
    });
}

function evaluate() {
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;

    const isOriginSchengen = schengenCountries.includes(origin);
    const isDestinationSchengen = schengenCountries.includes(destination);
    const isOss = ossCountries.includes(origin) && ossCountries.includes(destination);

    let passportControl = !isOriginSchengen || !isDestinationSchengen;
    let securityCheck = !isOss;

    let message = `Origin: ${origin} (${isOriginSchengen ? "Schengen" : "Non-Schengen"})\n`;
    message += `Destination: ${destination} (${isDestinationSchengen ? "Schengen" : "Non-Schengen"})\n`;
    message += `Passport control: ${passportControl ? "Yes" : "No"}\n`;
    message += `Additional security check: ${securityCheck ? "Yes" : "No"}`;

    alert(message);
}

function resetFields() {
    document.getElementById("origin").value = "";
    document.getElementById("destination").value = "";
}

document.addEventListener("DOMContentLoaded", populateSelects);