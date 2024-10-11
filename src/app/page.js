"use client"
import { Button, CardImg, Form } from "react-bootstrap";
import Pagina from "./components/Pagina";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { CiCalculator1 } from "react-icons/ci";
import { FaEuroSign } from "react-icons/fa";

export default function Home() {

  const [valor,setValor]= useState("")
  const[moeda, setMoeda]= useState("")
  const [resultado, setResultado]=useState(null)

  const valoresConversao ={
    dolar: 0.20,
    euro: 0.18,
    bitcoin: 0.000003
  }
function converter(event) {
  event.preventDefault()

  console.log(valor, moeda, resultado)
    const valarConvertido = valor * valoresConversao[moeda]
    setResultado(valarConvertido.toFixed(6))
  }

  const limpar= () => {
    setValor(""),
    setMoeda("dolar"),
    setResultado(null)
  }



  return (
    
    <Pagina titulo={"Conversor de Moedas"}>

      {/* imagem */}

      <CardImg height={350} width={512} src="/img/conversor02.png"/>
     
     
      {/* inclusao dos dados */}

      <Form onSubmit={converter}>
        <Form.Group>
           <Form.Label>Digite um valor</Form.Label>
           <Form.Control
           type="number"
           value={valor}
         
           onChange={e => {setValor(e.target.value)}}


           />
        </Form.Group>

        <Form.Group>
          <Form.Label>Selecione a moeda</Form.Label>
          <Form.Select
          type="moeda"
          value={moeda}
          onChange={e => {setMoeda(e.target.value)}}
          >
            <option>Selecione</option>
            <option value= "dolar">Dolar ($)</option>
            <option value='euro'>Euro  (€)  <FaEuroSign /> </option>
            <option value="bitcoin">Bitcoin (₿)</option>

          </Form.Select>
        </Form.Group>
        <br></br>

        <Form.Group className="text-center mb-3">
          <Button type="submit" variant="success" onClick={converter}><CiCalculator1 /> Calcular</Button>
          <Button className="btn btn-secondary ml-2 ms-2" onClick={limpar}>Limpar</Button>

          {resultado !== null && (
                <div className="mt-3">
                    <h3>Resultado:</h3>
                    <p>{`O valor convertido é: ${resultado} ${moeda.charAt(0).toUpperCase() + moeda.slice(1)}`}</p>
                </div>
            )} 

        </Form.Group>

      </Form>

    </Pagina>
    
  );
}
