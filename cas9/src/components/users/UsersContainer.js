import React,{useEffect} from 'react';
import {UsersComponent} from './UsersComponent';
import {useDispatch,useSelector} from 'react-redux';
import {fetchUsers} from './duck/operations';

export default function UsersContainer(){

    const dispatch = useDispatch();
    const users = useSelector(state=> state.usersReducer.users);
    const errorMessage = useSelector(state=> state.usersReducer.errorMessage);

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    return(
        <div id="users-container">
            <UsersComponent users={users} errorMessage={errorMessage}/>
        </div>
    )
}