// Дані для графіку
const data = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      data: [17145, 35929, 47219, 131700, 132696, 243273,340388,451878],
      borderColor: 'linear-gradient(90deg,#f39200 0%,#f4a90c 20%,#f7d01f 48%,#6d100a 100%)', // Колір лінії графіку
      backgroundColor: 'linear-gradient(90deg,#f39200 0%,#f4a90c 20%,#f7d01f 48%,#6d100a 100%)', // Прозорий фон
      borderWidth: 2,
      pointBackgroundColor: '#000',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: '#000',
    }]
  };
  
  // Налаштування графіку
  const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        x: {
          display: true,
          grid: {
            display: false
          },
      
        },
        y: {
          display: true,
          grid: {
            display: false
          },
          title: {
            display: true,
            text: 'Кількість гостей Black Honey'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        fillRectLinearGradient: true // Активувати плагін для градієнту
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
    }
  };
  
  // Ініціалізація графіку
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  