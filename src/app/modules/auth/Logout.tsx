import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Navigate, Routes} from 'react-router-dom'
import * as auth from './redux/AuthRedux'

export function Logout() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(auth.actions.logout())
    document.location.reload()
  }, [dispatch])

  return (
    <Routes>
      <Navigate to='/auth/login' />
    </Routes>
  )
}
