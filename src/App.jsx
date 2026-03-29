import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
          overflowX: 'hidden',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
