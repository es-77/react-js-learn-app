import React, { useEffect, useState } from 'react'
import axios from 'axios'
function RQOldMethodGetData() {
    const [herorData, setHeroData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        // axios.get('http://localhost:4000/superheroes1').then((rep) => {
        axios.get('http://localhost:4000/superheroes').then((rep) => {
            console.log(rep?.data);
            setHeroData(rep?.data);
            setLoading(false);
        })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setLoading(false);
            })
    }, [])
    return (
        <div>RQOldMethodGetData

            <br />
            {(error) ?? (loading ? <p>loading ....</p> : herorData.map((hero) => {
                return <p key={hero.id}>{hero.name}</p>
            }))}
        </div>
    )
}

export default RQOldMethodGetData