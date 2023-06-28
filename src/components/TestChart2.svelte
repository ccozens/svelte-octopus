<script lang="ts">
  import { onMount } from "svelte";
  import { fcRoot } from "svelte-fusioncharts";

  let chartConfig = {};
  let FusionCharts;
  let Charts;
  let FusionTheme;

  // fusioncharts call wrapped in onMount as needs access to DOM
  onMount(async() => {
    // imports
      FusionCharts = await import('fusioncharts');
      Charts = await import('fusioncharts/fusioncharts.charts');
      FusionTheme = await import('fusioncharts/themes/fusioncharts.theme.fusion');
        // Add dependencies
        fcRoot(FusionCharts, Charts, FusionTheme);

        let dataSource = {
          chart: {
            caption: "Recommended Portfolio Split",
            subCaption: "For a net-worth of $1M",
            showValues: "1",
            showPercentInTooltip: "0",
            numberPrefix: "$",
            enableMultiSlicing: "1",
            theme: "fusion",
          },
          data: [
            {
              label: "Equity",
              value: "300000",
            },
            {
              label: "Debt",
              value: "230000",
            },
            {
              label: "Bullion",
              value: "180000",
            },
            {
              label: "Real-estate",
              value: "270000",
            },
            {
              label: "Insurance",
              value: "20000",
            },
          ],
        };

        chartConfig = {
          type: "pie2d",
          width: "600",
          height: "400",
          renderAt: "chart-container",
          dataSource,
        };

        new FusionCharts(chartConfig).render();
      });

</script>

{#if typeof window !== "undefined"}
  <div id="chart-container" />
{/if}
