import { useEffect, useState } from "react";
import { getDeliveryTImeByHour} from "../services/api";
import LineChartWrapper from "./shared/LineChartWrapper";

function DeliveryTimePerHour() {

    const [orderData, setOrderData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const data = await getDeliveryTImeByHour();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div className="flex flex-col">
            <LineChartWrapper data={orderData} xaxis="hour" yaxis="minutes" />
        </div>
    )
}

export default DeliveryTimePerHour;