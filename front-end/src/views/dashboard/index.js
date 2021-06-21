import React, { useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    useEffect(() => {
        const fetchUser = async () => {
            const config = {
                headers: {
                    'x-auth-token': localStorage.token,
                },
            };

            try {
                const res = await axios.get(
                    'http://localhost:5000/api/auth',
                    config
                );

                if (res) {
                    console.log(res.data);
                }
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchUser();
    }, []);

    return <div>DashBoard</div>;
};

export default Dashboard;
