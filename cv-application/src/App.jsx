import { useState } from 'react'
import EdeucationalInfo from './EdeucationalInfo'
import GeneralInfo from './GeneralInfo'
import PracticalExp from './PracticalExp'


function App() {
  
  const [savedPerson, setSavedPerson] = useState({name:'Marsila A', birthDate:'1984-12-16', email:'marsila@gmail.com',phone:'123 456 123', id:'R1'})
  const [person, setPerson] = useState(savedPerson);
  const [educationInfo,setEductionInfo] = useState([]);
  const [educationForm, setEducationForm] = useState({
    id:'R1',
    schoolName:'', 
    titleOfStuday:'', 
    dateOfStuday:'' 
  });
  const [practicalExp, setPracticalExp] = useState([{pid:'R1', companyName:'', positionTitle:'', mainRes:'', fromDate:'', toDate:''}])
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [isEditingEdu, setIsEditingEdu] = useState(null);

  const handleGeneralInfoChange = (event) => {
    if(!isEditingInfo) return;
    const { name, value } = event.target;
    setPerson(prevPerson => ({
      ...prevPerson,
      [name]: value
    }));
  }

  const handleGeneralInfoEditing = () => {
    setIsEditingInfo(true);
    setPerson(savedPerson);

  }
  const handleGeneralInfoSaving = () => {
    setIsEditingInfo(false);
    setSavedPerson(person);
  }

  const handleGeneralInfoCanceling = () => {
    setPerson(savedPerson);
    setIsEditingInfo(false);
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
    setEducationForm({
      id:'R1',
      schoolName:'', 
      titleOfStuday:'', 
      dateOfStuday:'' 
    });
  }

  const handleEducationalInfoEditting = (index) => {
    setIsEditingEdu(index);
    setEducationForm(educationInfo[index]);    
  }

  const educationalInfoSaving = (event) =>{
    event.preventDefault();
    const updatedForm = educationInfo.map((item , index) => {
      if(index === isEditingEdu){
        return educationForm;
      }
      return item;
    })
    
     setEductionInfo(updatedForm);
     setIsEditingEdu(null);
     setEducationForm({
      id:'R1',
      schoolName:'', 
      titleOfStuday:'', 
      dateOfStuday:'' 
    });

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
        isEditing ={isEditingInfo}
        handleGeneralInfoChange = {handleGeneralInfoChange}
        handleGeneralInfoEditing = {handleGeneralInfoEditing}
        handleGeneralInfoSaving = {handleGeneralInfoSaving}
        handleGeneralInfoCanceling = {handleGeneralInfoCanceling}

      />
      <EdeucationalInfo 
        educationInfo ={educationInfo} 
        educationForm = {educationForm} 
        isEditingEdu = {isEditingEdu}
        handleEducationalInfoAdding ={handleEducationalInfoAdding}
        handleEducationalFormChange ={handleEducationalFormChange}
        handleEducationalInfoEditting ={handleEducationalInfoEditting}
        educationalInfoSaving ={educationalInfoSaving}
      />
      <PracticalExp 
        practicalExp={practicalExp}
        handlePracticalExpChange ={handlePracticalExpChange} 
      />
    </>
  )
}

export default App
