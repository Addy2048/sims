import { Link} from "react-router-dom";

export const Home = () => {
    return(
        <div className="fhw">
            <nav style={{width: '100%', backgroundColor: 'black', color: 'white', height:'40px', display: 'flex', alignItems: 'center'}}>
                <span style={{marginLeft: '20px'}}>User Name</span>
            </nav>
            <div className="option-holder">
                <div className="user-option"><Link to="/new-results" className="pointer bold">Add Results</Link></div>
                <div className="user-option"><Link to="/view-results/staff" className="pointer bold">Module Results</Link></div>
                <div className="user-option"><Link to='view-results/student' className="pointer bold">View Results</Link></div>
                <div className="user-option"><Link to='/' className="pointer bold">View Transcript</Link></div>
            </div>
        </div>
    )
}