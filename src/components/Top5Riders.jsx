import { getTop5Riders } from "../services/api";
import { useState, useEffect } from "react";

export default function Top5Riders() {
    const [orderData, setOrderData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getTop5Riders();
            setOrderData(data);
        };
        fetchData();
    }, []);

    console.log(orderData);

    return(
        <div className="bg-[var(--bg-surface)] border border-white/10 rounded-xl p-6 w-full max-w-xl mx-auto">
            <table className="w-full border-collapse text-sm">
                
                <thead className="border-b border-white/10">
                    <tr>
                        <th className="px-4 py-2 text-left text-[var(--text-muted)] font-medium">
                            Name
                        </th>
                        <th className="px-4 py-2 text-left text-[var(--text-muted)] font-medium">
                            Time in minutes
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {orderData.map((rider) => (
                        <tr 
                            key={rider.name}
                            className="border-b border-white/5 hover:bg-white/5 transition"
                        >
                            <td className="px-4 py-3 text-[var(--accent-primary)]">
                                {rider.name}
                            </td>
                            <td className="px-4 py-3 text-[var(--text-secondary)]">
                                {rider.time}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}