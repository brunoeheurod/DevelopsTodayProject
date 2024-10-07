'use client';
import { Container } from "@/components/Container"
import Link from 'next/link'
import Image from 'next/image'
import FeatherIcon from "feather-icons-react"
import Chart from "react-google-charts"
import { PopulationCount } from "@/types/country-info";

type ChartProps = {
    data: PopulationCount[]
}

export const PopulationChart = ({ data }: ChartProps) => {

    const formattedData = [["Years", "Population" ], ...data.map(record => [record.year, record.value]) ]

    return (
        <Container className="">
            <Chart
                // Try different chart types by changing this property with one of: LineChart, BarChart, AreaChart...
                chartType="LineChart"
                
                data={formattedData}
                options={{
                    legend: "none",
                    backgroundColor: "transparent",
                    is3D: true,
                    hAxis: { title: "Years" },
                    vAxis: { title: "Population"  },
                  }}
                legendToggle
            />
        </Container>
    )
}