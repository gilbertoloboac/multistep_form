import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import UseForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import { useForm } from './hooks/useForm';

import './App.css'


function App() {

  const formComponent = [
    <UseForm/>,
    <ReviewForm/>,
    <Thanks/>
  ]

  const { currentStep, currentComponent, changeStep, isLastStep} = useForm(formComponent)
 
  return (
    <div className='app'>
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra. Utilize o formulário
          abaixo para avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <p>Etapas</p>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
                </button>
                {!isLastStep ? (
                  <button type='submit'>
                  <span>Avançar</span>
                  <GrFormNext/>
                </button>
                ) : (<button type='button'>
                  <span>Enviar</span>
                  <FiSend/>
                </button>)}
            </div>
          </form>
      </div>
    </div>
  )
}

export default App
