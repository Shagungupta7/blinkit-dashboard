import { Card, CardContent, Typography } from "@mui/joy";
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
        <Card variant="soft" sx={{ width: 220, height: 120 }}>
            <CardContent>
                <Typography level="title-md" sx={{ fontSize: 18, textAlign: 'center' }}>{title}</Typography>
                <Typography sx={{ fontSize: 16, textAlign: 'center' }}>{value}</Typography>
            </CardContent>
        </Card>
    );
}

export default KPI;