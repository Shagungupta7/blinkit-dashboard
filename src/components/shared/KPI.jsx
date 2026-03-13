import { useEffect, useState } from "react";

function KPI({title, apifunction}) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apifunction;
            setValue(data);
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col">
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    );
}

export default KPI;