import { useState } from 'react'
import EducationalInfo from './EducationalInfo'
import GeneralInfo from './GeneralInfo'
import PracticalExp from './PracticalExp'
import { CVContext } from './CVContext'


function App() {
  
  const [savedPerson, setSavedPerson] = useState({name:'Marsila A', birthDate:'1984-12-16', email:'marsila@gmail.com',phone:'123 456 123', personId:'R1'})
  const [person, setPerson] = useState(savedPerson);
  const [educationInfo,setEductionInfo] = useState([]);
  const [educationForm, setEducationForm] = useState({
    PersonId:'R1',
    schoolName:'', 
    titleOfStudy:'', 
    dateOfStudy:'' 
  });
  const [practicalExp, setPracticalExp] = useState([]);
  const [practicalExpForm, setPracticalExpForm] = useState({
    personId:'R1',
    companyName:'',
    positionTitle:'',
    mainRes:'',
    fromDate:'',
    toDate:''
  })
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [isEditingEdu, setIsEditingEdu] = useState(null);
  const [isEditingExp, setIsEditingExp] = useState(null);

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
      personId:'R1',
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
      PersonId:'R1',
      schoolName:'', 
      titleOfStuday:'', 
      dateOfStuday:'' 
    });

  }

  const educationalInfoDelete = (index) => {
    const updateEduInfo = () => {
      const newArr = [...educationInfo];
      newArr.splice(index,1);
      return newArr;
    }
    setEductionInfo(updateEduInfo);
  }

  const handlePracticalExpFormChange = (event) =>{
    const {name, value} = event.target;
    setPracticalExpForm(prevPracticalExpForm => ({
      ...prevPracticalExpForm,
      [name]: value
    }));    
  }

  const handlepracticalExpAdd = (event) => {
    console.log(practicalExp);
    
    event.preventDefault();    
    setPracticalExp( prevPracticalExp => [...prevPracticalExp, practicalExpForm ]);
    setPracticalExpForm({
      personId:'R1',
      companyName:'',
      positionTitle:'',
      mainRes:'',
      fromDate:'',
      toDate:''
    })

  }
  const handlePracticalExpEditting = (index) => {
    setIsEditingExp(index);
    setPracticalExpForm(practicalExp[index]);    
  }

  const handlepracticalExpSave = (event) =>{
    event.preventDefault();
    const updateForm = practicalExp.map((item, index) => {
      if(isEditingExp === index){
        return practicalExpForm;
      }
      return item;
    });

    setPracticalExp(updateForm);
    setIsEditingExp(null);
    setPracticalExpForm({
      personId:'R1',
      companyName:'',
      positionTitle:'',
      mainRes:'',
      fromDate:'',
      toDate:''
    })
  }

  const practicalExpDelete = (index)=>{
    const updatePracticalExp = () => {
      const newArr = [...practicalExp];
      newArr.splice(index,1);
      return newArr;
    }    
    setPracticalExp(updatePracticalExp);    
  }

  const contextValue = {
    //General Info props
    person,
    savedPerson,
    isEditingInfo,
    handleGeneralInfoChange,
    handleGeneralInfoEditing,
    handleGeneralInfoSaving,
    handleGeneralInfoCanceling,

    //Educational Info props
    educationInfo, 
    educationForm,
    isEditingEdu, 
    handleEducationalFormChange,
    handleEducationalInfoAdding, 
    handleEducationalInfoEditting,
    educationalInfoSaving, 
    educationalInfoDelete,

    //Practical Experience props
    practicalExp,
    practicalExpForm,
    isEditingExp, 
    handlePracticalExpEditting, 
    handlePracticalExpFormChange, 
    handlepracticalExpAdd, 
    handlepracticalExpSave, 
    practicalExpDelete
  }
  
  return (
    <CVContext.Provider value={contextValue}>
      <>
        <GeneralInfo/>
        <EducationalInfo/>
        <PracticalExp />
      </>
    </CVContext.Provider>
    
  )
}

export default App
