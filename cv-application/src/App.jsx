import { useState } from 'react'
import EdeucationalInfo from './EdeucationalInfo'
import GeneralInfo from './GeneralInfo'
import PracticalExp from './PracticalExp'


function App() {
  const [person, setPerson] = useState({name:'', birthDate:'', email:'',phone:'', id:''});
  const [educationInfo,setEductionInfo] = useState([{id:'', schoolName:'', titleOfStuday:'', dateOfStuday:'' }]);
  const [practicalExp, setPracticalExp] = useState([{id:'', companyName:'', positionTitle:'', mainRes:'', fromDate:'', toDate:''}])

  const handleGeneralInfoChange = (event) => {
    const [input, value] = event.target.value;
    setPerson(prevPerson => ({
      ...prevPerson,
      [input]: value
    }));
  }

  const handleEducationalInfoChange = (event) =>{
    const [input, value] = event.target.value;
    setEductionInfo(prevEduInfo => ({
      ...prevEduInfo,
      [input]: value
    }))
  }

  const handlePracticalExpChange = (event) =>{
    const [input, value] = event.target.value;
    setPracticalExp(prevPracticalExp => ({
      ...prevPracticalExp,
      [input]: value
    }))
  }
  
  return (
    <>
      <GeneralInfo 
        person={person} 
        handleGeneralInfoChange= {handleGeneralInfoChange}
      />
      <EdeucationalInfo 
        educationInfo ={educationInfo}  
        handleEducationalInfoChange ={handleEducationalInfoChange}
      />
      <PracticalExp 
        practicalExp={practicalExp}
        handlePracticalExpChange ={handlePracticalExpChange} 
      />
    </>
  )
}

export default App
