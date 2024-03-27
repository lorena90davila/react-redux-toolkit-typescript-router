import { useEffect } from "react"
import { fetchUsers } from "./userSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

export const UserView = () => {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const { loading, error, users } = user

  useEffect(() => {
    dispatch(fetchUsers())
    // https://github.com/facebook/create-react-app/issues/6880#issuecomment-486636121
  }, [dispatch])

  return (
    <div>
      <h2>List of Users</h2>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error: {error}</div>}
      {!loading && users.length > 0 &&
        (<ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>)
      }
    </div>
  )
}
