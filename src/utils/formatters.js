export function formatCompactNumber(num) {
    const format = (n, suffix) => {
        const val = n.toFixed(1);
        return (val.endsWith(".0") ? val.slice(0, -2) : val) + suffix;
    };

    if (num >= 1e7) return format(num / 1e7, "Cr");
    if (num >= 1e5) return format(num / 1e5, "L");
    if (num >= 1e3) return format(num / 1e3, "K");
    return num.toString();
}

export function formatDecimal(num) {
    const val = Number(num).toFixed(1);
    return val.endsWith(".0") ? val.slice(0, -2) : val;
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