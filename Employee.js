import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Cardmployee from './Cardmployee'
import { Header } from './Header';
import Employeeedit from './Employeeedit';
export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("http://localhost:5207/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    return (
        <div>
            
        
            <Cardmployee    key={id} myEmp={employee}/>
         {/*   <label>Id:</label>
            {employee.id}<br />
            <label>name:</label>
            {employee.name}<br />
            <label>Email:</label>
            {employee.email}<br />
            <label>Department:</label>
            {employee.department}<br />
    */}
        </div>
    );
}
export default Employee;