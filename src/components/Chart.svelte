<script>
    import FusionCharts from "fusioncharts";
    import Charts from "fusioncharts/fusioncharts.charts";
    import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
    import SvelteFC, { fcRoot } from "svelte-fusioncharts";
    import dataSource from "./data.js";
    fcRoot(FusionCharts, Charts, FusionTheme);


    const chartConfigs = {
        type: "column2d",
        width: "600",
        height: "400",
        dataFormat: "json",
        dataSource,
    };


</script>

<div id="container">
    <SvelteFC {...chartConfigs} />
</div>

<!-- /* import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import fcRoot from "svelte-fusioncharts";
import dataSource from "./data.js";

fcRoot(FusionCharts, Charts, FusionTheme);


export default function createChart(chartConfigs) {
  return {
    name: "chart",
    props: {
      chartConfigs,
    },
  };
}
 */ -->