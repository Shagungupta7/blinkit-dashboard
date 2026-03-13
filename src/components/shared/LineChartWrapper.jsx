import { useEffect, useState } from "react";
import { getOrderPerDay } from "../../services/api";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

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
    if(data.length === 0) return <p>Loading...</p>
    const end = data[Math.min(data.length-1, selectedRange[0])][xaxis];
    const start = data[Math.min(data.length-1 ,selectedRange[1]-1)][xaxis];
    return(
        <div className="flex flex-col">
        <p>{start} -- {end}</p>
        <div className="flex gap-4 w-[200px] p-7">
            <button onClick={handlePrevClick}>prev</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
            <ResponsiveContainer height={300} width="80%">
                <LineChart data={filteredData}>
                    <XAxis dataKey={xaxis}/>
                    <YAxis/>
                    <Line dataKey={yaxis} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartWrapper;