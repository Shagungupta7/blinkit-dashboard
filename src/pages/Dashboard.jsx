import AvgDeliveryTimePerCity from "../components/AvgDeliveryTimePerCity";
import CancellationPerCity from "../components/CancellationPerCity";
import DeliveryTimePerHour from "../components/DeliverTimePerHour";
import OrdersPerCity from "../components/OrdersPerCity";
import OrderPerDay from "../components/OrdersPerDay";
import OrdersPerHour from "../components/OrdersPerHour";
import RevenuePerCity from "../components/RevenuePercity";
import KPI from "../components/shared/KPI";
import Top5Riders from "../components/Top5Riders";
import { getTotalOrders, getAvgOrderValue, getCancellationRate } from "../services/api";

export default function Dashboard() {
    return(
        <div className="flex flex-col justify-center items-center gap-12">
            <div className="text-[40px] font-inter mb-5">
                BLINKIT ANALYTICS DASHBOARD
            </div>
            <div className="flex gap-16 text-[20px]">
                <KPI title={"Total Orders"} apifunction={getTotalOrders()}/>
                <KPI title={"Average Order Value"} apifunction={getAvgOrderValue()} />
                <KPI title={"Cancellation Rate"} apifunction={getCancellationRate()} />
            </div>
            <div className="font-inter text-[30px] font-semibold">
                DEMAND
            </div>
            <div className="grid grid-cols-2 w-full gap-12">
                <OrdersPerHour />
                <OrdersPerCity />
                <OrderPerDay />
            </div>
            <div className="font-inter text-[30px] font-semibold">
                OPERATIONAL
            </div>
            <div className="grid grid-cols-2 w-full gap-12">
                <AvgDeliveryTimePerCity />
                <RevenuePerCity />
                <CancellationPerCity />
                <DeliveryTimePerHour />
            </div>
            <div className="font-inter text-[30px] font-semibold">
                TOP RIDERS
            </div>
            <div>
                <Top5Riders />
            </div>
        </div>
    )
}