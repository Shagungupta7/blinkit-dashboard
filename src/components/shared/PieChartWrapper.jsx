import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts";

export default function PieChartWrapper({ data, datakey, name, heading }) {

    const colors = [
    "#A9E5BB", // soft mint
    "#FCF6B1", // pale yellow
    "#F7B32B", // warm yellow/orange
    "#F72C25", // red
    "#54B226", // blinkit green (replaces deep plum)
    "#424B54", // slate grey
    "#E1CE7A", // muted gold
    "#C5BAAF"  // warm grey
];

    return (
        <div className="bg-[var(--bg-surface)] border border-white/10 rounded-xl p-4 space-y-4">
            <div className="text-[var(--text-secondary)] text-[16px]">{heading}</div>
            <ResponsiveContainer height={225} width="100%">
                <PieChart>

                    <Pie
                        data={data}
                        dataKey={datakey}
                        nameKey={name}
                        outerRadius={80}
                        stroke="none"
                        paddingAngle={2}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={colors[index % colors.length]}
                                stroke="none"
                                style={{
                                    filter: index === 0
                                        ? "drop-shadow(0px 0px 6px rgba(248,203,69,0.4))"
                                        : "none",
                                    opacity: 0.9
                                }}
                            />
                        ))}
                    </Pie>

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1E1E1E",
                            border: "none",
                            borderRadius: "8px",
                            color: "#fff"
                        }}
                        cursor={{ fill: "rgba(255,255,255,0.05)" }}
                    />

                    <Legend
                        wrapperStyle={{
                            color: "#A0A0A0",
                            fontSize: "12px"
                        }}
                    />

                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}