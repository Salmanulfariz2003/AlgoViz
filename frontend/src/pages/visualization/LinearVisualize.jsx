import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export const LinearVisualize = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [target, setTarget] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);
  const [description, setDescription] = useState("Press 'Start Linear Search' to begin visualization.");
  const [speed, setSpeed] = useState(800);
  const svgRef = useRef();

  useEffect(() => {
    const initialArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setArray(initialArray);
  }, []);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddValues = () => {
    const values = inputValue
      .split(",")
      .map((v) => parseInt(v.trim(), 10))
      .filter((v) => !isNaN(v));

    if (values.length) {
      setArray(values);
      setInputValue("");
      setDescription("Custom array set. Ready to search.");
      setActiveIndex(null);
      setFoundIndex(null);
    }
  };

  const drawGraph = React.useCallback(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const svg = d3.select(svgElement);
    svg.selectAll("*").remove();

    const width = svgElement.getBoundingClientRect().width;
    const height = 450;
    const margin = { top: 40, right: 20, bottom: 50, left: 50 };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleBand()
      .domain(array.map((_, i) => i))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(array) || 1])
      .range([innerHeight, 0]);

    const chart = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    chart.selectAll("rect")
      .data(array)
      .enter()
      .append("rect")
      .attr("x", (_, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => innerHeight - yScale(d))
      .attr("fill", (_, i) => {
        if (foundIndex === i) return "green";
        if (i === activeIndex) return "yellow";
        return "lightgray";
      });

    chart.selectAll("text")
      .data(array)
      .enter()
      .append("text")
      .attr("x", (_, i) => xScale(i) + xScale.bandwidth() / 2)
      .attr("y", (d) => yScale(d) - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .attr("fill", "black")
      .text((d) => d);

    chart.append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale).tickFormat((d) => d + 1))
      .call((g) => g.select(".domain").attr("stroke", "#333"))
      .call((g) => g.selectAll("line").attr("stroke", "#ccc"));

    chart.append("g")
      .call(d3.axisLeft(yScale))
      .call((g) => g.select(".domain").attr("stroke", "#333"))
      .call((g) => g.selectAll("line").attr("stroke", "#ccc"));
  }, [array, activeIndex, foundIndex]);

  useEffect(() => {
    if (array.length > 0) drawGraph();
  }, [array, activeIndex, foundIndex, drawGraph]);

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const linearSearch = async () => {
    const t = parseInt(target, 10);
    if (isNaN(t)) {
      setDescription("Please enter a valid target number.");
      return;
    }

    setDescription(`Starting Linear Search for ${t}...`);
    for (let i = 0; i < array.length; i++) {
      setActiveIndex(i);
      setDescription(`Checking element at index ${i}: ${array[i]}`);
      await sleep(speed);

      if (array[i] === t) {
        setFoundIndex(i);
        setDescription(`Element ${t} found at index ${i}!`);
        return;
      }
    }

    setDescription(`Element ${t} not found in the array.`);
    setActiveIndex(null);
    setFoundIndex(null);
  };

  const generateNewArray = () => {
    const initialArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setArray(initialArray);
    setTarget("");
    setDescription("Generated a new array. Ready to search.");
    setActiveIndex(null);
    setFoundIndex(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-blue-100 p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <h1 className="text-7xl font-bold text-center text-gray-800 mt-9 mb-4">Linear Search Visualizer</h1>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Enter comma-separated numbers"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full md:w-96 px-4 py-2 rounded-md shadow-md border border-gray-300"
          />
          <button
            onClick={handleAddValues}
            className="px-6 py-2 font-semibold rounded-md shadow-md text-white bg-green-500 hover:bg-green-600"
          >
            Add Values
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="number"
            placeholder="Enter number to search"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full md:w-64 px-4 py-2 rounded-md shadow-md border border-gray-300"
          />
          <button
            onClick={linearSearch}
            className="px-6 py-2 font-semibold rounded-md shadow-md text-white bg-pink-600 hover:bg-pink-700"
          >
            Start Linear Search
          </button>
          <button
            onClick={generateNewArray}
            className="px-6 py-2 font-semibold rounded-md shadow-md text-white bg-blue-600 hover:bg-blue-700"
          >
            New Array
          </button>
        </div>

        <div className="mt-6 bg-white border border-gray-300 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Color Legend</h2>
          <div className="flex justify-evenly">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-500"></div>
              <span className="text-lg">Currently Checking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500"></div>
              <span className="text-lg">Found Element</span>
            </div>
          </div>
        </div>

        <div className="text-lg font-medium text-gray-700 bg-yellow-50 border border-yellow-300 rounded-md p-4 shadow-sm text-center">
          {description}
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
          <label className="text-lg font-medium text-gray-700">Speed Control</label>
          <input
            type="range"
            min="100"
            max="2000"
            step="100"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full md:w-96 accent-blue-500"
          />
          <span className="text-lg font-semibold">{speed} ms</span>
        </div>

        <div className="relative overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-md p-6">
          <svg ref={svgRef} className="w-full" style={{ height: "450px" }}></svg>
        </div>
      </div>
    </div>
  );
};

export default LinearVisualize;
