

export default function EdeucationalInfo(props){
    const {educationInfo, handleEducationalFormChange, handleEducationalInfoAdding } = props
    console.log(educationInfo);
    
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
                    value ={educationInfo.schoolName}
                    onChange={handleEducationalFormChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="titleOfStuday">Title Of Studay</label>
                <input 
                    type="text" 
                    name="titleOfStuday" 
                    id="titleOfStuday" 
                    value= {educationInfo.titleOfStuday}
                    onChange={handleEducationalFormChange}
                />
            </div>            
            <div className="form-group">
                <label htmlFor="dateOfStuday">Date Of Studay</label>
                <input 
                    type="date" 
                    name="dateOfStuday" 
                    id="dateOfStuday"
                    value ={educationInfo.dateOfStuday} 
                    onChange={handleEducationalFormChange}
                />
            </div>                       
            <button type="button" className="big-button" onClick={handleEducationalInfoAdding}>Add</button>
        </form>
        <div className="educat-info">
            <h2>Here are the info of education</h2>
                <ul>
                    {educationInfo.map((info,index )=> {
                        return(
                            <>
                                <li key={index+'a'}>School Name : {info.schoolName}</li>
                                <li key={index+'b'}>Title Of Studay : {info.titleOfStuday}</li>
                                <li key={index+'c'}>Date Of Studay : {info.dateOfStuday}</li>
                                <button type="button" className="big-button">Edit</button>
                            </>          
                        )})}
                </ul>            
        </div>
        </>
    )
}