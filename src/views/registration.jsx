import { useState } from "react"

const StudentReg = () => {
    const [studentInfo, setStudentInfo] = useState({
        regNo: '',
        lastName: '',
        givenNames: '',
        dob: '',
        program:'',
        password: '',
    })

    const changeHandler = (event) => {
        const {name, value} = event.target

        setStudentInfo(prevVal => {return {...prevVal, [name]: value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(studentInfo)
    }

    return (
        <div>
            <form>
            <h3 className="text-center">Student Registration</h3>
                <section className="row">
                    <input name="regNo" value={studentInfo.regNo} placeholder="Reg#" className="block log-input" onChange={changeHandler} />
                    <input name="lastName" value={studentInfo.lastName} placeholder="Last Name" className="block log-input" onChange={changeHandler} />
                </section>
                <section className="row">
                    <input name="givenNames" value={studentInfo.givenNames} placeholder="Other Names" className="block log-input" onChange={changeHandler} />
                    <input type="date" name="dob" value={studentInfo.dob} placeholder="Birth Date" className="block log-input" onChange={changeHandler} />
                </section>
                <section className="row">
                    <select name="program" value={studentInfo.program} id="" className="block log-input" onChange={changeHandler}></select>
                    <input type="password" value={studentInfo.password} name="password" placeholder="Password" className="block log-input" onChange={changeHandler} />
                </section>
                <section className="row">
                    <button className="log-btn" onClick={handleSubmit}>Register</button>
                </section>
            </form>
        </div>
    )
}

const StaffReg = () => {
    const [staffInfo, setStaffInfo] = useState({
        staffNo: '',
        lastName: '',
        givenNames: '',
        role: '',
        department:'',
        password: '',
    })

    const changeHandler = (event) => {
        const {name, value} = event.target

        setStaffInfo(prevVal => {return {...prevVal, [name]: value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(staffInfo)
    }

    return (
        <div>
            <form>
            <h3 className="text-center">Staff Registration</h3>
                <section className="row">
                    <input name="staffNo" value={staffInfo.staffNo} placeholder="Staff#" className="block log-input" onChange={changeHandler} />
                    <input name="lastName" value={staffInfo.lastName} placeholder="Last Name" className="block log-input" onChange={changeHandler} />
                </section>
                <section className="row">
                    <input name="givenNames" value={staffInfo.givenNames} placeholder="Other Names" className="block log-input" onChange={changeHandler} />
                    <select name="role" value={staffInfo.role} id="" className="block log-input" onChange={changeHandler}></select>
                </section>
                <section className="row">
                    <select name="program" value={staffInfo.department} id="" className="block log-input" onChange={changeHandler}></select>
                    <input type="password" value={staffInfo.password} name="password" placeholder="Password" className="block log-input" onChange={changeHandler} />
                </section>
                <section className="row">
                    <button className="log-btn" onClick={handleSubmit}>Register</button>
                </section>
            </form>
        </div>
    )
}


export {StudentReg, StaffReg}