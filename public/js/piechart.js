// $( document ).ready(function() {
    const ctx = document.getElementById("sentimentChart").getContext("2d");

	let myChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: {
	        labels: ["Positive", "Negative", "Neutral"],
	        datasets: [{
	            label: '% of sentiment emojis',
	            data: [53, 46, 3],
	            backgroundColor:[
	            "rgb(54, 162, 235)",
	            "rgb(255, 99, 132)",
	            "rgb(255, 205, 86)"
	            ],
	            borderWidth: 4
	        }]
	    },
	    options: {}
	});
// });