import React from "react"
import { Form, Button } from "react-bootstrap"
import { login } from "../../api/authentication"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { getUserInfo } from "../../store/currentUser"
// import { userActions } from "../modules/userModule"
// import { appActions } from "../modules/appModule"

const Login: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = ($event: React.FormEvent<HTMLFormElement>): void => {
    const user = {
      email: $event.target[0].value,
      password: $event.target[1].value,
    }
    try {
      login(user).then((res): void => {
        console.log(res)
        dispatch(getUserInfo())
        history.push("/")
      })
    } catch (e) {}
    $event.preventDefault()
  }

  return (
    <>
      <div className="login d-flex flex-column align-items-center">
        <h3 className="title">LOOK UP</h3>
        <Form className="form-card" onSubmit={onSubmit} style={{ minWidth: "400px" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <Button className="" variant="link" onClick={() => history.push("/signup")}>
          no account?
        </Button>
      </div>
    </>
  )
}

export default Login
