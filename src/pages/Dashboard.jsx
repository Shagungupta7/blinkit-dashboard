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
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [demandActiveTab, setDemandActiveTab] = useState("orderPerDay");
    const [operationalActiveTab, setOperationalActiveTab] = useState("DeliveryTimePerHour");

    const tabs = {
        demand: [
            { key: "OrderPerHour", label: "Hourly Orders", component: <OrdersPerHour /> },
            { key: "OrderPerCity", label: "City Orders", component: <OrdersPerCity /> },
            { key: "ZoneWiseDistribution", label: "Zone Dist.", component: <ZoneWiseDistribution /> },
            { key: "orderPerDay", label: "Daily Orders", component: <OrderPerDay /> },
        ],
        operational: [
            { key: "DeliveryTimePerHour", label: "Hourly Time", component: <DeliveryTimePerHour /> },
            { key: "AvgDeliveryTimePerCity", label: "Avg Time / City", component: <AvgDeliveryTimePerCity /> },
            { key: "RevenuePerCity", label: "City Revenue", component: <RevenuePerCity /> },
            { key: "CancellationPerCity", label: "Cancel Rate", component: <CancellationPerCity /> },
            { key: "RiderUtilization", label: "Rider Util.", component: <RiderUtilization /> },
            { key: "RiderPerCity", label: "Riders / City", component: <RiderPerCity /> },
        ],
        };

        const TabButton = ({ active, onClick, children }) => (
        <div
            onClick={onClick}
            role="button"
            tabIndex={0}
            className={`cursor-pointer select-none text-[13px] tracking-tight leading-none font-semibold whitespace-nowrap transition
            px-2 py-1 border border-gray
            ${
                active
                ? "text-[var(--accent-primary)] border-b-transparent bg-[#111]"
                : "text-[var(--text-secondary)] hover:text-white hover:bg-gray-800"
            }`}
        >
            {children}
        </div>
        );

    return(
        <>
    <div className="flex flex-col justify-center items-center gap-3 w-full">
        <div className="flex flex-col items-center my-2">
            <div className="text-3xl font-semibold tracking-wide">
                <span className="text-[var(--accent-primary)] drop-shadow-[0_0_12px_rgba(255,225,65,0.45)]">BLINK</span>
                <span className="text-[var(--blinkit-green)] drop-shadow-[0_0_10px_rgba(12,143,95,0.4)]">IT</span>
                <span className="text-[var(--text-secondary)]">{" "}ANALYTICS</span>
            </div>
            <div className="w-24 h-[3px] bg-[var(--accent-primary)] mt-3 rounded-full shadow-[0_0_14px_rgba(255,225,65,0.5)]"></div>
        </div>
    </div>
    <div className="flex gap-4 w-full">
        <div className="flex flex-col gap-4">
            <KPI title={"Total Orders"} apifunction={getTotalOrders()}/>
            <KPI title={"Average Order Value"} apifunction={getAvgOrderValue()} />
            <KPI title={"Cancellation Rate"} apifunction={getCancellationRate()} />
            <KPI title={"Total Revenue"} apifunction={getTotalRevenue()} />
            <KPI title={"Total Riders"} apifunction={getTotalRiders()} />
            <KPI title={"Average Delivery Time"} apifunction={getAvgDeliveryTime()} />
            <KPI title={"Repeat Customers"} apifunction={getRepeatCustomers()} />
        </div>
        <div className="flex flex-col flex-1 w-full">
            <div className="flex flex-col flex-1 w-full gap-2">
            {/* DEMAND */}
            <div className="flex flex-col gap-2">
                <div className="text-[var(--text-secondary)] text-xs font-semibold tracking-wider">
                    DEMAND
                </div>

                <div className="flex flex-wrap gap-1">
                    {tabs.demand.map((tab) => (
                    <TabButton
                        key={tab.key}
                        active={demandActiveTab === tab.key}
                        onClick={() => setDemandActiveTab(tab.key)}
                    >
                        {tab.label}
                    </TabButton>
                    ))}
                </div>

                <div className="border border-gray-400 border-t-0 bg-[#111] rounded-b-sm">
                {tabs.demand.find((t) => t.key === demandActiveTab)?.component}
                </div>
            </div>

            {/* OPERATIONAL */}
            <div className="flex flex-col gap-2">
                <div className="text-[var(--text-secondary)] text-xs font-semibold tracking-wider">
                    OPERATIONAL
                </div>

                <div className="flex flex-wrap gap-1">
                    {tabs.operational.map((tab) => (
                    <TabButton
                        key={tab.key}
                        active={operationalActiveTab === tab.key}
                        onClick={() => setOperationalActiveTab(tab.key)}
                    >
                        {tab.label}
                    </TabButton>
                    ))}
                </div>

                <div className="border border-gray-400 border-t-0 bg-[#111] rounded-b-sm">
                    {tabs.operational.find((t) => t.key === operationalActiveTab)?.component}
                </div>
            </div>

            </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
            <div className="text-[var(--text-secondary)]">
                TOP RIDERS
            </div>
            <div>
                <Top5Riders />
            </div>
            <div className="flex w-full gap-3"> 
                 <div className="w-full">
                    <OrdersPerCategory />
                </div>
                <div className="w-full">
                    <OrdersPerPaymentMethod />
                </div>
            </div>
        </div>
    </div>
    </>
    )
}