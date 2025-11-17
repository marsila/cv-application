

export default function PracticalExp(props){
    const {practicalExp,practicalExpForm, handlePracticalExpEditting, 
           handlePracticalExpFormChange, isEditingExp,
           practicalExpAdd, practicalExpEdit, practicalExpDelete
          } 
        = props;
        
    return (
        <>
        <h1>Practical Experience</h1>
        <form  className="form-container">
            <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input 
                    type="text" 
                    name="companyName" 
                    id="companyName"
                    value={practicalExpForm.companyName}
                    onChange={handlePracticalExpFormChange} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="positionTitle">Position Title</label>
                <input 
                    type="text" 
                    name="positionTitle" 
                    id="positionTitle"
                    value={practicalExpForm.positionTitle}
                    onChange={handlePracticalExpFormChange} 
                />
            </div>            
            <div className="form-group">
                <label htmlFor="mainRes">Main Resposibality</label>
                <textarea 
                    name="mainRes" 
                    id="mainRes"
                    value={practicalExpForm.mainRes}
                    onChange={handlePracticalExpFormChange}                
                >
                </textarea>
            </div>            
            <div className="form-group">
                <label htmlFor="companyDate">date</label>                
            </div>
            <div className="form-group-date">
                <label htmlFor="fromDate">From</label>
                <input 
                    type="date" 
                    name="fromDate" 
                    id="fromDate"
                    value={practicalExpForm.fromDate}
                    onChange={handlePracticalExpFormChange} 
                /> 
                <label htmlFor="toDate">To</label> 
                <input 
                    type="date" 
                    name="toDate" 
                    id="toDate"
                    value={practicalExpForm.toDate}
                    onChange={handlePracticalExpFormChange} 
                />                
            </div>
            {(isEditingExp !== null) ? 
                <button type="button" className="big-button" onClick={practicalExpEdit}>Edit</button> :
                <button type="button" className="big-button" onClick={practicalExpAdd}>Add</button>   
            }
        </form>

        <div className="educat-info">
            <h2>The Practical Experience</h2>
            <ul>
                {practicalExp.map((exp, index) =>(
                  <li key={index}>
                    <div>Company Name: {exp.companyName}</div>
                    <div>Position Title: {exp.positionTitle}</div>
                    <div>Main Resposibality: {exp.mainRes}</div>
                    <div>Date: From {exp.fromDate} To: {exp.toDate}</div>
                    <button 
                        type="button"
                        onClick={() => handlePracticalExpEditting(index)}
                    >
                        Edit
                    </button>
                    <button 
                        type="button"
                        onClick={() => practicalExpDelete(index)}
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