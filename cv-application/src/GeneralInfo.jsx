import { useContext } from "react";
import { CVContext } from './CVContext';



export default function GeneralInfo() {

    const {person, isEditingInfo, 
        handleGeneralInfoSaving, 
        handleGeneralInfoEditing,
        handleGeneralInfoChange, 
        handleGeneralInfoCanceling } = useContext(CVContext);
    
    

    return (
        <>
        <h1>General Information</h1>
        <form  className="form-container">
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" 
                    name="name" 
                    id="name"
                    value={person.name}
                    onChange={handleGeneralInfoChange}
                    disabled = {!isEditingInfo}
                />
            </div>
            <div className="form-group">
                <label htmlFor="birthDate">Date of Birth</label>
                <input type="text" 
                    name="birthDate" 
                    id="birthDate" 
                    placeholder="YYYY-MM-DD"
                    value= {person.birthDate}
                    onChange={handleGeneralInfoChange}
                    disabled = {!isEditingInfo}
                />
            </div>            
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" 
                    name="email" 
                    id="email" 
                    placeholder="jane.doe@example.com"
                    value ={person.email}
                    onChange={handleGeneralInfoChange}
                    disabled = {!isEditingInfo}
                />
            </div>            
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" 
                    name="phone" 
                    id="phone" 
                    value={person.phone}
                    onChange={handleGeneralInfoChange}
                    disabled = {!isEditingInfo}
                />
            </div> 
            { isEditingInfo ? 
                <>
                    <button type="button" onClick={handleGeneralInfoSaving}>Save</button>
                    <button type="button" onClick={handleGeneralInfoCanceling}>Cancel</button> 
                </> : 
                <button type="button" className="big-button" onClick={handleGeneralInfoEditing}>Edit</button>}           
            
        </form>
        </>
    )
} 

