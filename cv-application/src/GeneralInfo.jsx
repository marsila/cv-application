//import { useState } from "react"



export default function GeneralInfo(props) {

    const {person,savedPerson, isEditing, 
        handleGeneralInfoSaving, handleGeneralInfoEditing,
        handleGeneralInfoChange, handleGeneralInfoCanceling } = props;
    
    

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
                    disabled = {!isEditing}
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
                    disabled = {!isEditing}
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
                    disabled = {!isEditing}
                />
            </div>            
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" 
                    name="phone" 
                    id="phone" 
                    value={person.phone}
                    onChange={handleGeneralInfoChange}
                    disabled = {!isEditing}
                />
            </div> 
            { isEditing ? 
                <>
                    <button type="button" onClick={handleGeneralInfoChange}>Edit</button> 
                    <button type="button" onClick={handleGeneralInfoSaving}>Save</button>
                    <button type="button" onClick={handleGeneralInfoCanceling}>Cancel</button> 
                </> : 
                <button type="button" className="big-button" onClick={handleGeneralInfoEditing}>Edit</button>}           
            
        </form>
        </>
    )
} 

