<script lang="ts">
    import { chart } from "svelte-apexcharts";
    let options = {
        chart: {
            type: "bar",
            background: "hsl(260, 100%, 14%)",
            //
            foreColor: "#60F0F8",
            height: 500,
            width: 600,
        },
        fill: {
            colors: ["hsl(183, 91%, 67%)"],
        },
        plotOptions: {
            bar: {
                borderRadius: 2,
                dataLabels: {
                    position: "top", // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val: number) {
                return val + " kWh";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["hsl(183, 91%, 67%)"],
            },
        },

        series: [
            {
                name: "sales",
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
    };
</script>

<div use:chart={options} />
