const schengenCountries = ["Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Bulgaria", "Romania", "Croatia"];
const ossCountries = ["United Kingdom", "Switzerland"];

function evaluate() {
    const origin = document.getElementById("origin").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const result = document.getElementById("result");

    if (!origin || !destination) {
        result.innerHTML = "Please enter both origin and destination countries.";
        return;
    }

    const isOriginSchengen = schengenCountries.includes(origin);
    const isDestinationSchengen = schengenCountries.includes(destination);
    const isOss = ossCountries.includes(origin) && ossCountries.includes(destination);

    let message = `Origin: ${origin} (${isOriginSchengen ? "Schengen" : "Non-Schengen"})<br>`;
    message += `Destination: ${destination} (${isDestinationSchengen ? "Schengen" : "Non-Schengen"})<br>`;
    message += `Passport control: ${isOriginSchengen && isDestinationSchengen ? "No" : "Yes"}<br>`;
    message += `Additional security check: ${isOss ? "No" : "Yes"}`;

    result.innerHTML = message;
}

function resetFields() {
    document.getElementById("origin").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("result").innerHTML = "";
}
