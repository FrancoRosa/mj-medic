import logo from './logo.svg';
import './index.css';
import ECGPlot from './ECGPlot';

function App() {
  return (
    <div class="plots">
      <ECGPlot title="SpO2"/>
      <ECGPlot title="ECG"/>
      <ECGPlot title="OtherData"/>
    </div>
  );
}

export default App;
