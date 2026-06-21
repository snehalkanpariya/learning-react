import { useState } from "react";
export default function Dashboard() {
    const [formInput, setFromInput] = useState({
        fullName: '',
        email: '',
        role: 'student'
    });

    const [roster, setRoster] = useState([
        { id: 1, fullName: 'snehal', email: 'snehal@gmail.com', role: 'Developer' },
        { id: 2, fullName: 'krishiv', email: 'krishiv@gmail.com', role: 'Developer' }
    ]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFromInput((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleMember = (event) => {
        event.preventDefault();

        if (!formInput.fullName || !formInput.email) return;

        const newMember = {
            id: Date.now(),
            fullName: formInput.fullName, 
            email: formInput.email,
            role: formInput.role
        };

        setRoster([...roster, newMember]);
        setFromInput({ fullName: '', email: '', role: 'student' });
    };

    const handleRemove = (id) => {
        setRoster(roster.filter(member => member.id !== id));
    };

    return (
        <div className="dashboard-container">
            <h2 className="roster-title">📋 Team & Student Roster Dashboard</h2>

            <form onSubmit={handleMember} className="form-container">
                <h3 className="form-title">Add New Member</h3>
                <div className="input-group">
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Full Name"
                        className="form-input"
                        value={formInput.fullName} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address"
                        className="form-input"
                        value={formInput.email} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="input-group">
                    <select name="role" value={formInput.role} onChange={handleChange} className="form-select">
                        <option value="student">Student</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn">Add Member</button>
            </form>

            <h3 className="roster-count">Current Roster ({roster.length})</h3>
            <div className="list-container">
                {roster.map((member) => (
                    <div key={member.id} className="member-card">
                        <div>
                            <h4 className="member-name">{member.fullName}</h4>
                            <p className="member-details">{member.email} | <strong>{member.role}</strong></p>
                        </div>
                        <button className="delete-btn" onClick={() => handleRemove(member.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}