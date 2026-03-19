import { useState, useEffect } from "react";
import { getOrderPerPaymentMethod } from "../services/api";
import PieChartWrapper from "./shared/PieChartWrapper";


export default function OrdersPerPaymentMethod() {
    const [orderData, setOrderData] = useState([]);
        
    useEffect( () => {
        const fetchData = async () => {
            const data = await getOrderPerPaymentMethod();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div>
            <PieChartWrapper data={orderData} datakey="totalOrders" name="method" heading="Orders Per Payment Method"/>
        </div>
    )
}