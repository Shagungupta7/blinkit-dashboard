import { useEffect, useState } from "react";
import { getCancellationPerCity } from "../services/api";
import BarChartWrapper from "./shared/BarChartWrapper";

export default function CancellationPerCity() {
    const [orderData, setOrderData] = useState([]);
        
    useEffect( () => {
        const fetchData = async () => {
            const data = await getCancellationPerCity();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div className="flex flex-col">
            <BarChartWrapper data={orderData} xaxis="city" yaxis="rate" />
        </div>
    )
}