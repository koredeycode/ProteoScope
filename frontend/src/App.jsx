import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AnalyzeProtein from './components/AnalyzeProtein';
// import ProteinToRNA from './components/ProteinToRNA';
// import ProteinToDNA from './components/ProteinToDNA';
import FetchProtein from './components/FetchProtein';
import SequenceConverter from './components/SequenceConverter';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<AnalyzeProtein />} />
          <Route path="/fetch" element={<FetchProtein />} />
          <Route path="/sequence_converter" element={<SequenceConverter />} />

          <Route path="*" element={<div>Error Page Not Found</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
