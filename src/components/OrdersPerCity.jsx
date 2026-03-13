import { useEffect, useState } from "react";
import { getTotalOrdersPerCity } from "../services/api";
import BarChartWrapper from "./shared/BarChartWrapper";

function OrdersPerCity() {

    const [orderData, setOrderData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const data = await getTotalOrdersPerCity();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div className="flex flex-col">
            <BarChartWrapper data={orderData} xaxis="city" yaxis="totalOrders" />
        </div>
    )
}

export default OrdersPerCity;