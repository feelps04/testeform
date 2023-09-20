import React from 'react';
import './css/css.css'; // Caminho correto para importar o arquivo CSS
import Header from './header';
import Titulo from './titile';
import RowContainer1 from './row-container1';
import H2 from './h2';
import RowContainer2 from './row-container2';
import Title2 from './title2';
import Title3 from './title3';
import Title4 from './title4';
import Title5 from './title5';
import Button from './button';

function App() {
  return (
    <div className="App">
      <Header />
     
      <form> 
        <Titulo />
        <RowContainer1 />
        <H2 />
        <RowContainer2 />
        <Title2 />
        <Title3 />
        <Title4 />
        <Title5 />
        <Button />
      </form>
    </div>
  );
}

export default App;
