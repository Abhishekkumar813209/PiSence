
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
} from "chart.js"

import { Pie} from "react-chartjs-2"


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
)

export const PieChart = ()=>{
    const data={
        labels:['Bad','Good'],
        datasets:[
            {
                label:'Attendance',
                data:[60,40],
                backgroundColor:['red','green'],
                borderWidth:1
            }
        ]
    }
    return(
        <Pie data={data} />
    )
}