import logo from './logo.svg';
import './index.css';
import ECGPlot from './ECGPlot';

function App() {
  return (
    <div className="plots">
      <ECGPlot title="SpO2" samples={200} color='blue'/>
      <ECGPlot title="ECG" samples={80} color='green'/>
      <ECGPlot title="OtherData" samples={1200} color='green'/>
    </div>
  );
}

export default App;
