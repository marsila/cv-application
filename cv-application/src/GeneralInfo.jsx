


export default function GeneralInfo() {
    return (
        <>
        <h1>General Information</h1>
        <form  class="form-container">
            <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" id="fname" />
            </div>
            <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" id="lname" />
            </div>            
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>            
            <div className="form-group">
                <label htmlFor="phon">Phone Number</label>
                <input type="tel" name="phone" id="phone" />
            </div>            
            <button type="button">Edit</button><button type="button">Save</button>
        </form>
        </>
    )
} 

