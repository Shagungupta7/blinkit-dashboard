export function formatCompactNumber(num) {
    if (num >= 1e7) return (num / 1e7).toFixed(2) + "Cr";
    if (num >= 1e5) return (num / 1e5).toFixed(2) + "L";
    if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
    return num.toString();
}

export function formatDecimal(num) {
    return Number(num).toFixed(2);
}

export function addUnit(num, type) {
    if (type === "currency") return "₹" + num;
    if (type === "percentage") return num + "%";
    return num;
}

export function formatKPIValue(title, value) {
    if (value === null || value === undefined) return "0";

    switch (title) {
        case "Total Revenue":
            return addUnit(formatCompactNumber(value), "currency");

        case "Average Order Value":
            return addUnit(formatDecimal(value), "currency");

        case "Cancellation Rate":
            return addUnit(formatDecimal(value), "percentage");

        case "Average Delivery Time":
            return value ? formatDecimal(value) + "m" : "—"; 

        case "Total Orders":
        case "Total Riders":
        case "Repeat Customers":
            return formatCompactNumber(value);

        default:
            return value.toString();
    }
}