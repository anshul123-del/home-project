import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../Context/AuthContext'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { Button, Table } from 'react-bootstrap'
import Editmodal from './Editmodal/Editmodal';
import { Form } from 'react-bootstrap';
import { TextField, Typography } from '@mui/material';
const Allusers = () => {
    const { auth } = useContext(Authcontext)
    const { baseurl } = useContext(Authcontext)
    const [user, setuser] = useState([])
    const jwtToken = auth?.user?.jwtToken
    
    const getdata = async () => {
        try {
            const response = await axios.get(`http://localhost:8050/get`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                }
            });
            setuser(response.data.data)
            console.log(response.data)
        } catch (error) {
            console.error('API Request Error:', error);
        }
    };


    useEffect(() => {
        getdata();
        console.log(user)
    }, []);

    const deleted = async (_id, inde) => {
        const deldata = await axios.post(`${baseurl}/del`, { _id }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            }
        })
        const deleteupuser = user.filter((_, ind) => ind !== inde)
        setuser(deleteupuser)
    }

    //Edited section
    const [editdata, seteditdata] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${baseurl}/user/update`, editdata)
        const updatedData = user.map((user) =>
            user._id === editdata._id ? editdata : user
        );
        setuserdataa(updatedData);
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        seteditdata({ ...editdata, [name]: value })
    }
    const f1 = <>
        <Form onClick={handleSubmit}>
            <Typography>Edit category</Typography>
            <TextField
                label="Name"
                name="Name"
                value={editdata.categoryname}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
            />
            
            <Button
                onClick={handleClose}
                type="submit"
                variant="primary"
                color="primary"
                fullWidth
            >
                Save Changes
            </Button>
        </Form>

    </>
    return (

        <div>
            <Table responsive bordered>
                <thead/>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>Password</th>
                    <th>Edit </th>
                    <th>Delete </th>
                </tr>
                <tbody>
                    {
                        user.map((ele, inde) => {
                            return (
                                <tr key={ele._id} >
                                    <td>{ele.Name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.password}</td>
                                    <td><Button onClick={() => {
                                        setShow(true)
                                        seteditdata(ele)
                                    }}><EditIcon /></Button></td>
                                    <td><Button variant='danger' onClick={() => { deleted(ele._id, inde) }}><DeleteIcon /></Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {show && (
                <Editmodal
                    Mbody={f1}
                    onHide={handleClose}
                    show={show}
                    title="Editing"
                />
            )}
        </div>
    )
}

export default Allusers
