
import EducationalInfo from './EducationalInfo'
import GeneralInfo from './GeneralInfo'
import PracticalExp from './PracticalExp'
import { CVContext } from './CVContext'
import { useCVState } from './useCVState'



function App() {
  
  const cvData = useCVState();
  
  return (
    <CVContext.Provider value={cvData}>
      <>
        <GeneralInfo/>
        <EducationalInfo/>
        <PracticalExp />
      </>
    </CVContext.Provider>
    
  )
}

export default App
