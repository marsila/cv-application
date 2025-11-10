

export default function PracticalExp(){
    return (
        <>
        <h1>Practical Experience</h1>
        <form  class="form-container">
            <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" name="companyName" id="companyName" />
            </div>
            <div className="form-group">
                <label htmlFor="positionTitle">Position Title</label>
                <input type="text" name="positionTitle" id="positionTitle" />
            </div>            
            <div className="form-group">
                <label htmlFor="mainRes">Main Resposibality</label>
                <textarea name="mainRes" id="mainRes"></textarea>
            </div>            
            <div className="form-group">
                <label htmlFor="companyDate">date</label>                
            </div>
            <div className="form-group-date">
                <label htmlFor="fromCompanyDate">From</label>
                <input type="date" name="fromCompanyDate" id="fromCompanyDate" /> 
                <label htmlFor="toCompanyDate">To</label> 
                <input type="date" name="toCompanyDate" id="toCompanyDate" />                
            </div>            
            <button type="button">Edit</button><button type="button">Save</button>
        </form>
        </>
    )
}