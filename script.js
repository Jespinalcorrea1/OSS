const schengenCountries = ["Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Bulgaria", "Romania", "Croatia"];
const ossCountries = ["United Kingdom", "Switzerland"];

function evaluate() {
    const origin = document.getElementById("origin").value.trim();
    const destination = document.getElementById("destination").value.trim();

    if (!origin || !destination) {
        alert("Please enter both origin and destination countries.");
        return;
    }

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
