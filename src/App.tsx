import { GlobalStyled } from './styles/GlobalStyled'
import { ResetStyled } from './styles/GlobalReset'
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from './providers/GlobalContext/GlobalContext';
import { RoutsMain } from './routers/routsMain';


const App = () => {
  return (
    <>
      <GlobalProvider>
        <ResetStyled/>
        <GlobalStyled/>
        <RoutsMain/>
        <ToastContainer 
                  position='top-right'
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme='light'
                />
      </GlobalProvider>
        
    </>
  )
}

export default App
