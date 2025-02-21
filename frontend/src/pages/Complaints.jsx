import React, { useEffect, useState } from "react";
import axios from "axios";

function Complaints() {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/complaints").then((res) => {
            setComplaints(res.data);
        });
    }, []);

    return (
        <div>
            <h2>Complaints</h2>
            <ul>
                {complaints.map((c) => (
                    <li key={c._id}>{c.title} - {c.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default Complaints;