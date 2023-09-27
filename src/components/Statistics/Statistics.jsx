import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { getStored } from "../../utility/localStorage";


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};



const Statistics = () => {

    const [pastDonation, setpastDonation] = useState(0)
    const [remaining, setremaining] = useState(12)
    useEffect(() => {
        const pastDonationId = getStored()

        const past = pastDonationId.length
        const subRemaining = remaining - past;

        setremaining(subRemaining)
        setpastDonation(past)

    }, [])

    

    const data = [
        { name: "Your Donation", value: pastDonation },
        { name: "Total Donation", value: remaining },
    ];
    
    const COLORS = ["#FF444A", "#00C49F"];

    return (
        <div className="text-center max-auto">
            <ResponsiveContainer className="max-auto" width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {data.map((entry, index) => (
                    <div className="" key={`label-${index}`} style={{ display: 'inline-block', margin: '0 20px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ backgroundColor: COLORS[index % COLORS.length], width: '20px', height: '20px', display: 'inline-block' }}></div>
                        <span style={{ marginLeft: '5px' }}>{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;


