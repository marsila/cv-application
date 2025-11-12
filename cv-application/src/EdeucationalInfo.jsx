

export default function EdeucationalInfo(){
    
    return (
        <>
        <h1>Educational Information</h1>
        <form  class="form-container">
            <div className="form-group">
                <label htmlFor="schoolName">School Name</label>
                <input type="text" name="schoolName" id="schoolName" />
            </div>
            <div className="form-group">
                <label htmlFor="titleOfStuday">Title Of Studay</label>
                <input type="text" name="titleOfStuday" id="titleOfStuday" />
            </div>            
            <div className="form-group">
                <label htmlFor="dateOfStuday">Date Of Studay</label>
                <input type="date" name="dateOfStuday" id="dateOfStuday" />
            </div>                       
            <button type="button">Add</button>
        </form>
        <div className="educat-info">
            <h2>Here the info of educatio</h2>
            <p></p>
            <button type="button">Edit</button>
        </div>
        </>
    )
}