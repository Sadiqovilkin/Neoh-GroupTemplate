import { useParams } from "react-router";
import axios from "axios"
import { createContext, useContext, useState, useEffect } from "react";
import { endpoints ,BASE_URL } from "../services/constant";


const dataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [oneUser, setOneUser] = useState([]);

    // User Reguests
    const userGetAll = async () => {
        await axios.get(BASE_URL  + `${endpoints.Users}`).then((res) => {
            setUsers(res.data.data);
        });
    };
    const userGetOne = async (id) => {
        await axios.get(BASE_URL + `/${id}`).then((res) => {
            setOneUser(res.data.data);
        });
    };
    const userDelete = async (id) => {
        await axios.delete(BASE_URL + `/${id}`).then((res) => {
            try {
                const deleteData = users.find((x) => x._id == id);
                users.splice(users.indexOf(deleteData), 1);
                setUsers([...users]);
            } catch (error) {
                console.log(error);
            }
        });
    };
    const userPost = async (payload) => {
        await axios.post(BASE_URL+ `${endpoints.Users}`, payload).then(() => {
            setUsers([...users, payload]);
        });
    };










    useEffect(() => {
        userGetAll();
    }, []);





    const values = {users ,userGetAll,userGetOne,userDelete,userPost};
    return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
};

const useDataContext = () => useContext(dataContext);

export { useDataContext, DataContextProvider };