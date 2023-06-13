import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

import { fetchUsers } from "../store/users/usersSlice";
import './user.css'

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if(!users){
    return (
      <div>No users found</div>
    )
  }

  return (
    <div className="users-container">
      {users.map(({ name: { first, last }}, index) => (
        <ul key={index}>
          <li>first name: {first}</li>
          <li>last name: {last}</li>
        </ul>
      ))}
    </div>
  )
  
}

export default Users