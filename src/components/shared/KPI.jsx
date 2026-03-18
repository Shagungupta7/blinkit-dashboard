import { Card, CardContent, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { formatKPIValue } from "../../utils/formatters";

function KPI({ title, apifunction }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apifunction;
            setValue(data);
        };
        fetchData();
    }, []);

    const current = {
    color: "var(--text-primary)",
    glow: "rgba(255,255,255,0.25)"};

    return (
        <Card
            variant="soft"
            sx={{
                width: 220,
                height: 130,
                borderRadius: "16px",
                background: "var(--bg-surface)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.25s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                },
                /* subtle gradient border */
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    padding: "1px",
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${current.color}, transparent)`,
                    WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                },
            }}
        >
            <CardContent
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    level="body-sm"
                    sx={{
                        color: "var(--text-secondary)",
                        fontSize: 13,
                        mb: 0.5,
                        letterSpacing: "0.5px"
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    sx={{
                        fontSize: 32,
                        fontWeight: 700,
                        color: current.color,
                        textShadow: `0 0 16px ${current.glow}`,
                    }}
                >
                    {formatKPIValue(title, value)}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default KPI;