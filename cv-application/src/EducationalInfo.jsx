import { useContext } from "react";
import { CVContext } from './CVContext';

export default function EdeucationalInfo(){
    const {educationInfo, educationForm, handleEducationalFormChange,
             handleEducationalInfoAdding, handleEducationalInfoEditting,
             isEditingEdu, educationalInfoSaving, educationalInfoDelete
          } = useContext(CVContext);
   
    
    return (
        <>
            <h1>Educational Information</h1>
            <form  className="form-container">
                <div className="form-group">
                    <label htmlFor="schoolName">School Name</label>
                    <input 
                        type="text" 
                        name="schoolName" 
                        id="schoolName" 
                        value ={educationForm.schoolName}
                        onChange={handleEducationalFormChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="titleOfStudy">Title Of Study</label>
                    <input 
                        type="text" 
                        name="titleOfStudy" 
                        id="titleOfStudy" 
                        value= {educationForm.titleOfStudy}
                        onChange={handleEducationalFormChange}
                    />
                </div>            
                <div className="form-group">
                    <label htmlFor="dateOfStuday">Date Of Study</label>
                    <input 
                        type="date" 
                        name="dateOfStudy" 
                        id="dateOfStudy"
                        value ={educationForm.dateOfStudy} 
                        onChange={handleEducationalFormChange}
                    />
                </div> 
                { isEditingEdu !== null ?
                 <button type="button" className="big-button" onClick={educationalInfoSaving}>Save</button> :
                 <button type="button" className="big-button" onClick={handleEducationalInfoAdding}>Add</button>   
                }                      
                
            </form>
            <div className="educat-info">
                <h2>Education Information</h2>
                    <ul>
                        {educationInfo.map((info, index) => (
                            <li key={index}>
                            <div>School Name: {info.schoolName}</div>
                            <div>Title Of Study: {info.titleOfStudy}</div>
                            <div>Date Of Study: {info.dateOfStudy}</div>
                            <button
                                type="button"
                                onClick={() => handleEducationalInfoEditting(index)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={() => educationalInfoDelete(index)}
                            >
                                Delete
                            </button>
                            </li>
                        ))}
                    </ul>            
            </div>
        </>
    )
}