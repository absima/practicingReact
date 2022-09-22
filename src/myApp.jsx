
import ArthiHeader from './parts/arthi.jsx'
import FiCalendar from './parts/fi.jsx'
import SivakToWatchList from './parts/sivak.jsx'
import SimaMovieList from './parts/sima.jsx'
import Container from 'react-bootstrap/Container';
import Table from './parts/Table.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


export default function MyApp() {
  return (
    <Container>
      <h1>Welcome to MyFlix</h1>
      <ArthiHeader />
      <Table />
      <FiCalendar />
      <SivakToWatchList />
      <SimaMovieList />
    </Container>
  );
}