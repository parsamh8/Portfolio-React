import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CursorTrail />
    </>
  );
}

export default App;
