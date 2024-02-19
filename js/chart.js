import { clients } from "./db/clients.js";

const widthScreen = window.innerWidth;
let width, height, gradient;

function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(
      chartArea.left,
      chartArea.bottom,
      chartArea.left,
      chartArea.top
    );
    gradient.addColorStop(0, "#FFB800B8");
    gradient.addColorStop(0.2, "#FA8B08B8");
    gradient.addColorStop(0.48, "#FA0808A3");
    gradient.addColorStop(1, "#646006FC");
  }

  return gradient;
}

const data = {
  labels: clients.years,
  datasets: [
    {
      data: clients.amount,
      borderColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return;
        }
        return getGradient(ctx, chartArea);
      },
      borderWidth: widthScreen > 768 ? 8 : 3,
      pointBackgroundColor: "#000",
      pointBorderColor: "#000",
      pointHoverBackgroundColor: "#000",
      pointHoverBorderColor: "#000",
      pointRadius: widthScreen > 768 ? 6 : 3,
      pointHoverBorderWidth: widthScreen > 768 ? 5 : 2,
      lineTension: 0.4,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          family: "Gotham Pro Medium",
          size: widthScreen > 768 ? 12 : 8,
        },
        bodyFont: {
          family: "Gotham Pro Medium",
          size: widthScreen > 768 ? 20 : 15,
        },
        displayColors: false,
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        border: {
          width: 0,
          color: "transparent",
        },
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Gotham Pro Medium",
            size:  widthScreen > 921 ? 30 : (widthScreen > 768 ? 20 : 12),
          },
          color: "#000",
          padding: widthScreen < 992 ? 10 : 0,
        },
      },
      y: {
        display: false,
      },
    },
  },
};

let myChart = null;

function renderChart() {
  const subtitleWidth = widthScreen > 768 ? 60 : 20;
  const chartWrapper = $('.chart-wrapper');
  const windowWidth = chartWrapper.width();
  const chartCont = $('.myChart-cont');
  const chartWidth = windowWidth - subtitleWidth;
  chartCont.css('width', chartWidth + 'px');

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart($('#myChart'), config);
}

let firstScrollToContUnderChart = true;

$(window).scroll(function () {
  const contUnderChart = $('.location__container');
  const contUnderChartPosition = contUnderChart.offset().top;
  if (firstScrollToContUnderChart && contUnderChartPosition < $(window).scrollTop() + $(window).height()) {
    renderChart();
    firstScrollToContUnderChart = false;
  }
});

$(window).on('orientationchange', function () {
  renderChart();
});
