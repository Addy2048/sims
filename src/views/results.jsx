const NewResults = () => {
    return(
        <div className="fhw">
            <nav style={{width: '100%', backgroundColor: 'black', color: 'white', height:'40px', display: 'flex', alignItems: 'center'}}>
                <span style={{marginLeft: '20px'}}>User Name</span>
            </nav>
            <div className="results-options">
                <select className="results-options-a block">
                    <option>Semester</option>
                </select>

                <select className="results-options-a block">
                    <option>Module</option>
                </select>

                <input className="results-options-a block" type="text" placeholder="Academic Year" />
            </div>
            <div>
                <h3 className="results-title">Module Name -- Module Code -- Academic Year</h3>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '60%'}}>
                    <div className="results-table-row text-center">
                        <span className="block results-table-title-cnt" style={{width:'40%'}}>Student's Name</span>
                        <span className="block results-table-title-cnt" style={{width:'20%'}}>CA</span>
                        <span className="block results-table-title-cnt" style={{width:'20%'}}>FE</span>
                        <span className="block results-table-title-cnt" style={{width:'20%'}}>Action</span>
                    </div>
                    <div className="results-table-row">
                        <span className="block results-table-cnt" style={{width:'40%'}}>Adiel E. Azaliwa</span>
                        <span className="block results-table-cnt" style={{width:'20%'}}>
                            <input className="block" style={{width: '90%'}} type="text" placeholder="0" name='ca' />
                        </span>
                        <span className="block results-table-cnt" style={{width:'20%'}}>
                            <input className="block" style={{width: '90%'}} type="text" placeholder="0" name="fe" />
                        </span>
                        <span className="block results-table-cnt" style={{width:'20%'}}>
                            <button>Save</button>
                        </span>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export const ViewResults = () => {
    return(
        <div className="fhw">
        <nav style={{width: '100%', backgroundColor: 'black', color: 'white', height:'40px', display: 'flex', alignItems: 'center'}}>
            <span style={{marginLeft: '20px'}}>User Name</span>
        </nav>
        <div className="results-options">
            <select className="results-options-a block">
                <option>Semester</option>
            </select>

            <select className="results-options-a block">
                <option>School Year</option>
            </select>

            <input className="results-options-a block" type="text" placeholder="Academic Year" />
        </div>
        <div>
            <h3 className="results-title">Semester -- School Year -- Academic Year</h3>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '70%'}}>
                <div className="results-table-row text-center">
                    <span className="block results-table-title-cnt" style={{width:'40%'}}>Module Name</span>
                    <span className="block results-table-title-cnt" style={{width:'20%'}}>CA</span>
                    <span className="block results-table-title-cnt" style={{width:'20%'}}>FE</span>
                    <span className="block results-table-title-cnt" style={{width:'20%'}}>Total</span>
                    <span className="block results-table-title-cnt" style={{width:'20%'}}>Grade</span>
                    <span className="block results-table-title-cnt" style={{width:'20%'}}>Points</span>
                </div>
                <div className="results-table-row">
                    <span className="block results-table-cnt" style={{width:'40%'}}>Software Engineering</span>
                    <span className="block results-table-cnt" style={{width:'20%'}}>40</span>
                    <span className="block results-table-cnt" style={{width:'20%'}}>30</span>
                    <span className="block results-table-cnt" style={{width:'20%'}}>70</span>
                    <span className="block results-table-cnt" style={{width:'20%'}}>A</span>
                    <span className="block results-table-cnt" style={{width:'20%'}}>5</span>
                </div>
            </div>  
        </div>
    </div>
    )
}

export const ModuleResults = () => {
    return(
        <div className="fhw">
            <nav style={{width: '100%', backgroundColor: 'black', color: 'white', height:'40px', display: 'flex', alignItems: 'center'}}>
                <span style={{marginLeft: '20px'}}>User Name</span>
            </nav>
            <div className="results-options">
                <select className="results-options-a block">
                    <option>Semester</option>
                </select>

                <select className="results-options-a block">
                    <option>Module</option>
                </select>

                <input className="results-options-a block" type="text" placeholder="Academic Year" />
            </div>
            <div>
                <h3 className="results-title">Module Name -- Module Code -- Academic Year</h3>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '60%'}}>
                    <div className="results-table-row text-center">
                        <span className="block results-table-title-cnt" style={{width:'40%'}}>Student's Name</span>
                        <span className="block results-table-title-cnt" style={{width:'20%'}}>CA</span>
                        <span className="block results-table-title-cnt" style={{width:'20%'}}>FE</span>
                        <span className="block results-table-title-cnt" style={{width:'20%'}}>Total</span>
                        <span className="block results-table-title-cnt" style={{width:'20%'}}>Action</span>
                    </div>
                    <div className="results-table-row">
                        <span className="block results-table-cnt" style={{width:'40%'}}>Adiel E. Azaliwa</span>
                        <span className="block results-table-cnt" style={{width:'20%'}}>
                            <input className="block" style={{width: '90%'}} type="text" placeholder="0" name='ca' />
                        </span>
                        <span className="block results-table-cnt" style={{width:'20%'}}>
                            <input className="block" style={{width: '90%'}} type="text" placeholder="0" name="fe" />
                        </span>
                        <span className="block results-table-cnt" style={{width:'20%'}}>0</span>
                        <span className="block results-table-cnt" style={{width:'20%'}}>
                            <button>Update</button>
                        </span>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export {NewResults}