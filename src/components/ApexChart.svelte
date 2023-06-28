<script lang="ts">
    import { chart } from "svelte-apexcharts";

    import { reversedSample } from "../routes/sample";
    interface Result {
        consumption: number;
        interval_start: string;
        interval_end: string;
    }

    const { results } = reversedSample;

    const elecConsumption = results.map((result: Result) => result.consumption);


    function finalDates(results: Result[]) {
        const intervalStartDates = results.map(
            (result) => new Date(result.interval_start)
        );

        const formatOptions: Intl.DateTimeFormatOptions = {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        };

        const formattedDates = intervalStartDates.map((date) =>
            date.toLocaleDateString("en-GB", formatOptions)
        );
        const xAxisData = formattedDates.map((formattedDate) =>
            formattedDate.toString()
        );
        return xAxisData;
    }

    const xAxisData = finalDates(results);

    let options = {
        chart: {
            type: "bar",
            background: "hsl(260, 100%, 14%)",
            //
            foreColor: "#60F0F8",
            height: 500,
            width: "80%",
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
                data: elecConsumption,
            },
        ],
        xaxis: {
            categories: xAxisData,
        },
    };
</script>

<div use:chart={options} />
