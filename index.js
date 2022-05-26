const data1 = {
    labels: [20, 25, 30, 35, 40, 60, 65],
    datasets: [{
        label: '',
        barThickness: 25,
        data: [20, 25, 35, 40, 50, 90, 100],
        backgroundColor: '#0800a3',
        hoverOffset: 4
    }, {
        label: '',
        barThickness: 25,
        data: [40, 60, 80, 90,120, 170, 190],
        backgroundColor: '#4935ff',
        hoverOffset: 4
    }, {
        label: '',
        barThickness: 25,
        data: [70, 90,  130, 150,  220, 290, 320],
        backgroundColor: '#85afff',
        hoverOffset: 4
    }]
};


const config = {
    type: "bar",
    data: data1,
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                beginAtZero: false
            },
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea:false
                    }
                }
            ]
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14
                    },
                    boxWidth:00
                },
                align:'start',
                maxHeight:100,
                maxWidth:20,
                title:{
                    color: 'red'
                }
            }
        }
    }
}

const mychat = new Chart(document.getElementById('myChart'), config)

const dataPi1 = {
    labels: [
      'Average'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [78,22],
      backgroundColor: [
        '#32d8ae',
        '#d3f7ee'
      ],
      hoverOffset: 4
    },
    ]
  };

 const configPieChart1 = {
    type: 'doughnut',
    data: dataPi1,
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 16
                    },
                    boxWidth:0
                }
            }
        },
        elements:{

        }
    }
  };

const myPiChart1 = new Chart(document.getElementById('myPiChart1'), configPieChart1);

const dataPi2 = {
    labels: [
      'Top'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [95,5],
      backgroundColor: [
        '#32d8ae',
        '#d3f7ee'
      ],
      hoverOffset: 4
    },
    ]
  };

 const configPieChart2 = {
    type: 'doughnut',
    data: dataPi2,
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 16
                    },
                    boxWidth:0
                }
            }
        }
    }
  };

const myPiChart2 = new Chart(document.getElementById('myPiChart2'), configPieChart2);

const dataPi3 = {
    labels: [
      'Me'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [59,49],
      backgroundColor: [
        '#32d8ae',
        '#d3f7ee'
      ],
      hoverOffset: 4
    },
    ]
  };

 const configPieChart3 = {
    type: 'doughnut',
    data: dataPi3,
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 16
                    },
                    boxWidth:0
                }
            }
        }
    }
  };

const myPiChart3 = new Chart(document.getElementById('myPiChart3'), configPieChart3);

