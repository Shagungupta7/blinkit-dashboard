import { getRevenuePerCity } from "../services/api";
import { useState, useEffect } from "react";
import BarChartWrapper from "./shared/BarChartWrapper";


export default function RevenuePerCity() {
    const [orderData, setOrderData] = useState([]);
    
    useEffect( () => {
        const fetchData = async () => {
            const data = await getRevenuePerCity();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div className="flex flex-col">
            <BarChartWrapper data={orderData} xaxis="city" yaxis="revenue" />
        </div>
    )
}