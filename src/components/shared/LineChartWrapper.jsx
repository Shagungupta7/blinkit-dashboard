import { useEffect, useState } from "react";
import { getOrderPerDay } from "../../services/api";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function LineChartWrapper({data, xaxis, yaxis}) {

    const [selectedRange, SetSelectedRange] = useState([0, 7]);

    function handleNextClick() {
        if(selectedRange[0] > 0){
            SetSelectedRange([selectedRange[0]-6, selectedRange[1]-6])
        }
    }

    function handlePrevClick() {
        if(data.length >= selectedRange[1]){
            SetSelectedRange([selectedRange[0] + 6, selectedRange[1]+6]);
        }
        console.log(selectedRange[1]);
    }

    const filteredData = data.slice(selectedRange[0], selectedRange[1]);
    filteredData.reverse();

    console.log(data);
    if(data.length === 0) return <p className="text-[var(--text-secondary)]">Loading...</p>

    const end = data[Math.min(data.length-1, selectedRange[0])][xaxis];
    const start = data[Math.min(data.length-1 ,selectedRange[1]-1)][xaxis];

    // date formatter
    const formatDate = (value) => {
        const date = new Date(value);
        return date.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short"
        });
    };

    return(
        <div className="bg-[var(--bg-surface)] border border-white/10 rounded-sm p-4 items-center">

            {/* controls */}
            <div className="flex gap-4 mb-2 justify-center">
                <img src="/images/left-arrow.png" className="transition w-4 h-4" onClick={handlePrevClick} />
                <p className="text-[var(--text-secondary)] text-[12px]">
                    {formatDate(start)} — {formatDate(end)}
                </p>
                <img src="/images/right-arrow.png" className="transition w-4 h-4" onClick={handleNextClick} />
            </div>

            <ResponsiveContainer height={200} width="100%">
                <LineChart data={filteredData} responsive >

                    <XAxis 
                        dataKey={xaxis}
                        stroke="#A0A0A0"
                        tick={{ fill: "#A0A0A0", fontSize: 12 }}
                        tickFormatter={(value) => formatDate(value)}
                    />

                    <YAxis
                        stroke="#A0A0A0"
                        tick={{ fill: "#A0A0A0", fontSize: 12 }}
                    />

                    <Line 
                        dataKey={yaxis} 
                        type="monotone" 
                        stroke="#0e9747"
                        strokeWidth={2}
                        dot={false}
                        style={{
                            filter: "drop-shadow(0px 0px 4px rgba(84,178,38,0.2))"
                        }}
                    />

                    <Tooltip
                        labelFormatter={(label) => formatDate(label)}
                        contentStyle={{
                            backgroundColor: "#1E1E1E",
                            border: "none",
                            borderRadius: "8px",
                            color: "#fff"
                        }}
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartWrapper;