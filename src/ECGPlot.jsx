import Plot from 'react-plotly.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ECGPlot = ({title, samples, color}) => {
  let previous = new Array(samples).fill(0)
  let values;
  const url = 'http://localhost:9999/api/v1'
  const [data, setData] = useState(previous);

  const getSerialData = url => {
    axios.get(url).then(response => {
      values = response.data.values
      previous = [...previous.slice(values.length), ...values]
      setData(previous);
    })
  } 

  useEffect(() => {
    setInterval(getSerialData, 200, url);
  },[])

  return (
    <div>
      <Plot
          data={[
            {
              y: data,
              mode: 'lines+markers',
              marker: {color: color},
            },
          ]}
          layout={ {width: 580, height: 400, title: title} }
      />
      <button onClick={getSerialData}>GetData</button>
    </div>

  );
};

export default ECGPlot;