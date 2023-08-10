import './App.css';
import React, {useState, useEffect} from 'react'
import {Button, Col, Form, FormGroup, Row, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const url = "http://localhost:3000/files/data";


  const [fileToFind, setFileToFind] = useState("");
  const handlerSearch = (event) =>{
    event.preventDefault();

    findDataSpecificFile(`${url}?fileName=${fileToFind}`)
    setFileToFind("");
   
  }

  const [dataFiles, setDataFiles] = useState([]);

   useEffect(() => findDataFiles(url), []);

   function findDataFiles(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      
     let myData = [];
       data.forEach(element => {
         element.lines.forEach(line => {
           myData.push({file: element.file, hex: line.hex, text: line.text, number: line.number})
         });
       });
       setDataFiles(myData);
    })
    .catch((err) => {
       console.log(err.message);
    });
   }

   function findDataSpecificFile(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      
     let myData = [];
      if(data.code == 404){
        console.log('archivo no encontrado');
      }else{
        data.lines.forEach(line => {
          myData.push({file: data.file, hex: line.hex, text: line.text, number: line.number})
        });
        setDataFiles(myData);
      }
    })
    .catch((err) => {
       console.log(err.message);
    });
   }


  return (
    <div className="App">
      <h1>React Test App - ToolBox OTT</h1>
      <Form >
        <FormGroup>
          <Row>
            
            <Col md>
            <Form.Control type='text' placeholder='Búsqueda por nombre' value={fileToFind}
            onChange={(e)=> setFileToFind(e.target.value)}
            ></Form.Control>
            </Col>
            <Col md>
              <Button onClick={handlerSearch}>Buscar</Button>
            </Col>
          <Form.Text >
          </Form.Text>
          </Row>
        </FormGroup>
      </Form>
      <Table striped variant="dark" >
        <tbody>
        <tr>
          <td>File Name</td>
          <td>Text</td>
          <td>Number</td>
          <td>Hex</td>
        </tr>
        {
         dataFiles.map((item,i)=>
          <tr key={i}>
          <td>{item.file}</td>
          <td>{item.text}</td>
          <td>{item.number}</td>
          <td>{item.hex}</td>
        </tr>
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;