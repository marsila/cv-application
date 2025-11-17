

export default function EdeucationalInfo(props){
    const {educationInfo, educationForm, handleEducationalFormChange,
             handleEducationalInfoAdding, handleEducationalInfoEditting,
             isEditingEdu, educationalInfoSaving, educationalInfoDelete
          } = props
   
    
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
                    <label htmlFor="titleOfStuday">Title Of Studay</label>
                    <input 
                        type="text" 
                        name="titleOfStuday" 
                        id="titleOfStuday" 
                        value= {educationForm.titleOfStuday}
                        onChange={handleEducationalFormChange}
                    />
                </div>            
                <div className="form-group">
                    <label htmlFor="dateOfStuday">Date Of Studay</label>
                    <input 
                        type="date" 
                        name="dateOfStuday" 
                        id="dateOfStuday"
                        value ={educationForm.dateOfStuday} 
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
                            <div>Title Of Studay: {info.titleOfStuday}</div>
                            <div>Date Of Studay: {info.dateOfStuday}</div>
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