const { useState } = require("react");

function App(){
  const [task, setTask] = useState ([
  {
    id:1,
    title:"Armoçar macarão com sarcixa",
    description:"Comer sarcixa com macarão pra ficar gordo",
    isCompleteted:false
    
  }

  {
    id:2,
    title: "Calistenia",
    description: "2X12 Flexões de joelho, 3x12 levantamento de peso",
    isCompleteted:false
  }

  {
    id:3,
    title:"Lazer",
    description:"Jogatina",
    isCompleteted:false
  }

  ]);
       return(
        <h1>Gerenciando Tarefas</h1>
       );




       
}


export default App;








/*function App(){
  const [message, setMessage] = useState('Olá Mundo');
  return(
    <div>
<h1>{message}</h1>
<button onClick={
  ()=>{setMessage('olá fui clicado')}
}></button>
    </div>
  )
}

export default App