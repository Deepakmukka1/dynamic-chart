import './charts.css'
import React, { useState } from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";

function Senddata() {
  const [nums, setNums] = useState([]);
  const [isFine, setisFine] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nums);
    setisFine(true);
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Wastage of food in kilos",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
        data: nums,
      },
    ],
  };

  return (
    <div className="main">
      <form method="POST" onSubmit={handleSubmit} className="forms">
        <div>
          <span>Enter 1st value: </span>
          <input
            type="number"
            onChange={(e) =>
              setNums((oldnums) => [...oldnums, parseInt(e.target.value)])
            }
          />
          <br/>
          <span>Enter 2nd value: </span>
          <input
            type="number"
            onChange={(e) =>
              setNums((oldnums) => [...oldnums, parseInt(e.target.value)])
            }
          />
            <br/>
          <span>Enter 3rd value: </span>
          <input
            type="number"
            onChange={(e) =>
              setNums((oldnums) => [...oldnums, parseInt(e.target.value)])
            }
          />
            <br/>
          <span>Enter 4th value: </span>
          <input
            type="number"
            onChange={(e) =>
              setNums((oldnums) => [...oldnums, parseInt(e.target.value)])
            }
          />
            <br/>
          <span>Enter 5th value: </span>
          <input
            type="number"
            onChange={(e) =>
              setNums((oldnums) => [...oldnums, parseInt(e.target.value)])
            }
          />
            <br/>
          <span>Enter 6th value: </span>
          <input
            type="number"
            onChange={(e) =>
              setNums((oldnums) => [...oldnums, parseInt(e.target.value)])
            }
          />
            <br/>
          <span>Enter 7th value: </span>
          <input
            type="number"
            onChange={(e) =>
              setNums((oldnums) => [...oldnums, parseInt(e.target.value)])
            }
          />
            <br/>
          <button type="submit">Submit</button>
        </div>
      </form>
      {isFine && (
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true,
            layout: {
              padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 100,
              },
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      )}
    </div>
  );
}

export default Senddata;
