import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { formatCompactNumber } from "../../utils/formatters";

export default function BarChartWrapper({ data, xaxis, yaxis }) {
    return (
        <div className="bg-[var(--bg-surface)] border border-white/10 rounded-sm p-5 items-center">
            
            <ResponsiveContainer height={220} width="100%">
                <BarChart data={data}>

                    {/* subtle grid */}
                    <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />

                    {/* x axis (UNCHANGED) */}
                    <XAxis 
                        dataKey={xaxis} 
                        stroke="#A0A0A0"
                        tick={{ fill: "#A0A0A0", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />

                    {/* y axis (WITH FORMATTER) */}
                    <YAxis 
                        stroke="#A0A0A0"
                        tick={{ fill: "#A0A0A0", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => formatCompactNumber(value)}
                    />

                    {/* actual bars */}
                    <Bar 
                        dataKey={yaxis} 
                        fill="#0e9747"
                        radius={[2, 2, 0, 0]}
                        barSize={40}
                        style={{
                            filter: "drop-shadow(0px 0px 4px rgba(84,178,38,0.2))"
                        }}
                    />

                    {/* tooltip */}
                    <Tooltip
                        formatter={(value) => formatCompactNumber(value)}
                        contentStyle={{
                            backgroundColor: "#1E1E1E",
                            border: "none",
                            borderRadius: "10px",
                            color: "#fff"
                        }}
                        cursor={{ fill: "rgba(255,255,255,0.05)" }}
                    />

                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}