import React, {useState} from 'react';
import Header from './components/Header';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import CardGenerator from './components/CardGenerator';
import Modal from './components/Modal';
import './App.css';

export default function App(props) {

  const [createForm1, showForm1] = useState(false)
  const [createForm2, showForm2] = useState(false)
  const [formData, setFormData] = useState({});

  const handleHeaderButtonClick = () => { 
    showForm1(true)
    showForm2(false)
  }

  const handleNextButtonClick = () =>{
    showForm2(true)
    showForm1(false)
  }

  const handleForm1Submit = (data) => {
    setFormData(data);
  };

  const handleForm2Submit = () => {
    showForm2(false)
  };

  return (
    <div className="App">
      <div className="container mx-auto">
        <Header onButtonClick = {handleHeaderButtonClick}/>
       
            {createForm1 && <div className="container mx-auto">
                <Modal>
                  <Form1 onButtonClick={handleNextButtonClick} onFormSubmit={handleForm1Submit}  />
                </Modal>
              </div>
            }

            {createForm2 && <div className="container mx-auto">
                <Modal>
                  <Form2 formData={formData} onFormSubmit={handleForm2Submit}/>
                </Modal>  
              </div>
            }
        
          <CardGenerator/>
      </div>
    </div>
  );
}
