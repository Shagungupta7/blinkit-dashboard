import AvgDeliveryTimePerCity from "../components/AvgDeliveryTimePerCity";
import CancellationPerCity from "../components/CancellationPerCity";
import DeliveryTimePerHour from "../components/DeliverTimePerHour";
import OrdersPerPaymentMethod from "../components/OrderPerPaymentMethod";
import OrdersPerCategory from "../components/OrdersPerCategory";
import OrdersPerCity from "../components/OrdersPerCity";
import OrderPerDay from "../components/OrdersPerDay";
import OrdersPerHour from "../components/OrdersPerHour";
import RevenuePerCity from "../components/RevenuePerCity";
import RiderPerCity from "../components/RiderPerCity";
import RiderUtilization from "../components/RiderUtilization";
import KPI from "../components/shared/KPI";
import Top5Riders from "../components/Top5Riders";
import ZoneWiseDistribution from "../components/ZoneWiseDistribution";
import { getTotalOrders, getAvgOrderValue, getCancellationRate, getTotalRevenue, getTotalRiders, getAvgDeliveryTime, getRepeatCustomers } from "../services/api";

export default function Dashboard() {
    return(
    <div className="flex flex-col justify-center items-center gap-12 w-full">
                    <div className="flex flex-col items-center mb-10">
                    <div className="text-3xl font-semibold tracking-wide">
                        <span className="text-[var(--accent-primary)] drop-shadow-[0_0_12px_rgba(255,225,65,0.45)]">BLINK
                        </span>
                        <span className="text-[var(--blinkit-green)] drop-shadow-[0_0_10px_rgba(12,143,95,0.4)]">IT
                        </span>
                        <span className="text-[var(--text-secondary)]">{" "}ANALYTICS
                       </span></div>
              <div className="w-24 h-[3px] bg-[var(--accent-primary)] mt-3 rounded-full shadow-[0_0_14px_rgba(255,225,65,0.5)]"></div>
                    </div>

    <div className="flex justify-center gap-5 w-full px-10">
                <KPI title={"Total Orders"} apifunction={getTotalOrders()}/>
                <KPI title={"Average Order Value"} apifunction={getAvgOrderValue()} />
                <KPI title={"Cancellation Rate"} apifunction={getCancellationRate()} />
                <KPI title={"Total Revenue"} apifunction={getTotalRevenue()} />
                <KPI title={"Total Riders"} apifunction={getTotalRiders()} />
                <KPI title={"Average Delivery Time"} apifunction={getAvgDeliveryTime()} />
                <KPI title={"Repeat Customers"} apifunction={getRepeatCustomers()} />
            </div>
            <div className="font-inter text-[30px] font-semibold">
                DEMAND
            </div>
            <div className="grid grid-cols-2 w-full gap-12">
                <OrdersPerHour />
                <OrdersPerCity />
                <OrderPerDay />
                <ZoneWiseDistribution />
            </div>
            <div className="font-inter text-[30px] font-semibold">
                OPERATIONAL
            </div>
            <div className="grid grid-cols-2 w-full gap-12">
                <AvgDeliveryTimePerCity />
                <RevenuePerCity />
                <CancellationPerCity />
                <DeliveryTimePerHour />
                <RiderUtilization />
                <RiderPerCity />    
            </div>
            <div className="font-inter text-[30px] font-semibold">
                TOP RIDERS
            </div>
            <div>
                <Top5Riders />
            </div>
            <div className="w-full">
                <OrdersPerCategory />
            </div>
            <div className="w-full">
                <OrdersPerPaymentMethod />
            </div>
        </div>
    )
}