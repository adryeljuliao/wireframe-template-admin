Highcharts.chart("areachart", {
  chart: {
    type: "area"
  },
  title: {
    text: null
  },
  xAxis: {
    categories: null
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Monitors",
      data: [1, 17, 5]
    },
    {
      name: "Phones",
      data: [6, 1, 18]
    },
    {
      name: "Headsets",
      data: [10, 4, 1]
    }
  ]
});

new Chart(document.getElementById("doughnut-chart"), {
  type: "doughnut",
  data: {
    labels: ["Eletronic", "Furniture", "Toys"],
    datasets: [
      {
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
        data: [10, 6, 4]
      }
    ]
  },
  options: {}
});

$(document).ready(function() {
  $("#menu-options").click(function() {
    $(".menu-area").toggleClass("menu-area-visible");
    $(".app").toggleClass("app-menu-area-none");
    /*.css("display", "flex");
    setTimeout(function() {
      $(".menu-area-visible").css("display", "none");
    }, 200);*/
  });
});
