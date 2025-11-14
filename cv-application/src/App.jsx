import { useState } from 'react'
import EdeucationalInfo from './EdeucationalInfo'
import GeneralInfo from './GeneralInfo'
import PracticalExp from './PracticalExp'


function App() {
  
  const [savedPerson, setSavedPerson] = useState({name:'Marsila A', birthDate:'1984-12-16', email:'marsila@gmail.com',phone:'123 456 123', id:'R1'})
  const [person, setPerson] = useState(savedPerson);
  const [educationInfo,setEductionInfo] = useState([]);
  const [educationForm, setEducationForm] = useState({});
  const [practicalExp, setPracticalExp] = useState([{pid:'R1', companyName:'', positionTitle:'', mainRes:'', fromDate:'', toDate:''}])
  const [isEditing, setIsEditing] = useState(false);

  const handleGeneralInfoChange = (event) => {
    if(!isEditing) return;
    const { name, value } = event.target;
    setPerson(prevPerson => ({
      ...prevPerson,
      [name]: value
    }));
  }

  const handleGeneralInfoEditing = () => {
    setIsEditing(true);
    setPerson(savedPerson);

  }
  const handleGeneralInfoSaving = () => {
    setIsEditing(false);
    setSavedPerson(person);
  }

  const handleGeneralInfoCanceling = () => {
    setPerson(savedPerson);
    setIsEditing(false);
  }

  const handleEducationalFormChange = (event) =>{
    const { name, value} = event.target;    
    setEducationForm(prevEduForm => ({
      ...prevEduForm,
      [name]: value
    }))
  }

  const handleEducationalInfoAdding = (event) => {
    event.preventDefault();
    setEductionInfo(prevEducationInfo =>  [...prevEducationInfo, educationForm]);
  }

  const handlePracticalExpChange = (event) =>{
    const {input, value} = event.target;
    setPracticalExp(prevPracticalExp => ({
      ...prevPracticalExp,
      [input]: value
    }))
  }
  
  return (
    <>
      <GeneralInfo 
        person={person} 
        savedPerson ={savedPerson}
        isEditing ={isEditing}
        handleGeneralInfoChange = {handleGeneralInfoChange}
        handleGeneralInfoEditing = {handleGeneralInfoEditing}
        handleGeneralInfoSaving = {handleGeneralInfoSaving}
        handleGeneralInfoCanceling = {handleGeneralInfoCanceling}

      />
      <EdeucationalInfo 
        educationInfo ={educationInfo}  
        handleEducationalInfoAdding ={handleEducationalInfoAdding}
        handleEducationalFormChange ={handleEducationalFormChange}
      />
      <PracticalExp 
        practicalExp={practicalExp}
        handlePracticalExpChange ={handlePracticalExpChange} 
      />
    </>
  )
}

export default App
