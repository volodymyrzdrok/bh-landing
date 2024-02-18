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
  labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      data: [17145, 35929, 47219, 131700, 132696, 243273, 340388, 451878],

      borderColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return;
        }
        return getGradient(ctx, chartArea);
      },
      borderWidth:widthScreen > 768 ?  6 : 3,
      // fill: false,
      // cubicInterpolationMode: "monotone",
      tension: 0.4,

      pointBackgroundColor: "#000",
      pointBorderColor: "#000",
      pointHoverBackgroundColor: "#000",
      pointHoverBorderColor: "#000",
      pointRadius: widthScreen > 768 ?  7 : 4,
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
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
    
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Gotham Pro Medium", 
            size: widthScreen > 768 ?  30 : 12, 
      
          },
          color: '#000',
          padding: widthScreen < 992 ?  10 : 0,
        },
        axis: {
          color: 'red' // Колір вісі x
        }
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
