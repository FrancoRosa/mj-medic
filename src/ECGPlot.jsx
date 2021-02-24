import Plot from 'react-plotly.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ECGPlot = ({title}) => {
  const [data, setData] = useState([]);
  const x = [0,1,2,3,4,5,6,7,8,9]
  const getECGData = () => {
    const url = 'http://localhost:9999/api/v1'
    axios.get(url).then(response => {
      setData(response.data.values);
    })
  } 

  useEffect(() => {
    setInterval(getECGData, 100);
  },[])
  
  return (
    <Plot
        data={[
          {
            x: x,
            y: data,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 320, height: 240, title: title} }
      />
  );
};

export default ECGPlot;