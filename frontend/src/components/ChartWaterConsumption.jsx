/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { faker } from "@faker-js/faker";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../actions/userActions";
import { getWaterConsumptionDetails } from "../actions/waterConsumptionActions";

export default function ChartWaterConsumption(props) {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  let waterConsumptionDetails = useSelector(
    (state) => state.waterConsumptionDetails
  );
  const { consumption } = waterConsumptionDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  let consumptionArray = [];
  consumptionArray = consumption ? Object.values(consumption) : [];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Water Consumption",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        // max: 200,
        beginAtZero: true,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Apa consumata - metrii cubi",
        data: consumption ? consumptionArray : null,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
      // {
      //   label: "Intretinere",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      //   backgroundColor: "rgba(255, 99, 132, 0.2)",
      //   borderColor: "rgb(255, 99, 132)",
      //   borderWidth: 1,
      // },
    ],
  };
  return <Bar options={options} data={data} />;
}
