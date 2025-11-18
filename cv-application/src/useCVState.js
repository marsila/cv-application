import { useState } from "react";
import { CVContext } from "./CVContext";

export function useCVState() {
    
    const INITIAL_EDUCATION_FORM = {
        PersonId:'R1',
        id:null,
        schoolName:'', 
        titleOfStudy:'', 
        dateOfStudy:'' 
      };
      const INITIAL_PRACTICAL_FORM = {
        personId:'R1',
        id:null,
        companyName:'',
        positionTitle:'',
        mainRes:'',
        fromDate:'',
        toDate:''
      };
      const INITIAL_SAVED_PERSON = {
        name:'Marsila A', 
        birthDate:'1984-12-16', 
        email:'marsila@gmail.com',
        phone:'123 456 123', 
        personId:'R1'
      };
      const [savedPerson, setSavedPerson] = useState(INITIAL_SAVED_PERSON);
      const [person, setPerson] = useState(savedPerson);
      const [educationInfo,setEductionInfo] = useState([]);
      const [educationForm, setEducationForm] = useState(INITIAL_EDUCATION_FORM);
      const [practicalExp, setPracticalExp] = useState([]);
      const [practicalExpForm, setPracticalExpForm] = useState(INITIAL_PRACTICAL_FORM);
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
        const newEduForm = {...educationForm, id:crypto.randomUUID()} 
        setEductionInfo(prevEducationInfo =>  [...prevEducationInfo, newEduForm]);
        setEducationForm(INITIAL_EDUCATION_FORM);
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
         setEducationForm(INITIAL_EDUCATION_FORM);
    
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
        event.preventDefault(); 
        const newPracForm = {...practicalExpForm, id:crypto.randomUUID()};   
        setPracticalExp( prevPracticalExp => [...prevPracticalExp, newPracForm]);
        setPracticalExpForm(INITIAL_PRACTICAL_FORM)
    
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
        setPracticalExpForm(INITIAL_PRACTICAL_FORM);
      }
    
      const practicalExpDelete = (index)=>{
        const updatePracticalExp = () => {
          const newArr = [...practicalExp];
          newArr.splice(index,1);
          return newArr;
        }    
        setPracticalExp(updatePracticalExp);    
      }
    return {
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
    INITIAL_EDUCATION_FORM,
    handleEducationalFormChange,
    handleEducationalInfoAdding, 
    handleEducationalInfoEditting,
    educationalInfoSaving, 
    educationalInfoDelete,

    //Practical Experience props
    practicalExp,
    practicalExpForm,
    isEditingExp, 
    INITIAL_PRACTICAL_FORM,
    handlePracticalExpEditting, 
    handlePracticalExpFormChange, 
    handlepracticalExpAdd, 
    handlepracticalExpSave, 
    practicalExpDelete
  }
    
}