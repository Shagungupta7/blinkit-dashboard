import { useState, useEffect } from "react";
import { getOrderPerCategory } from "../services/api";
import PieChartWrapper from "./shared/PieChartWrapper";


export default function OrdersPerCategory() {
    const [orderData, setOrderData] = useState([]);
        
    useEffect( () => {
        const fetchData = async () => {
            const data = await getOrderPerCategory();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div>
            <PieChartWrapper data={orderData} datakey="totalOrders" name="category" heading="Orders Per Category"/>
        </div>
    )
}