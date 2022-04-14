import 'bootstrap/dist/js/bootstrap';

import logo from './logo.svg';
import './App.css';
import MyMovie from './component/my-movie/mymovie';
import DetailsList from './component/details-list/DetailsList';




function App() {
  return (
   <div>
     <MyMovie />
     <DetailsList />

   </div>
  );       
}

export default App;

