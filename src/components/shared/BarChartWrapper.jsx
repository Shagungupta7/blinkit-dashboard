import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChartWrapper({data, xaxis, yaxis}) {
    console.log(data);
    return(
        <div className="flex flex-col bg-white border rounded-md p-5 items-center">
            <ResponsiveContainer height={300} width="100%">
                <BarChart data={data} > 
                    <XAxis dataKey={xaxis} />
                    <YAxis/>
                    <Bar dataKey={yaxis} barSize={50}/>
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>  
    )

}