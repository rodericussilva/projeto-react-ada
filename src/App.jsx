import React, { useState, useEffect } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setTarefas(data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }

    buscarDados();
  }, []);

  return (
    <>
      <h1 className='titulo'>Deploy na Vercel</h1>
      <div>
        {tarefas.map((tarefa) => (
          <div className="task-item" key={tarefa.id}>
            <p>{tarefa.id} - {tarefa.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;