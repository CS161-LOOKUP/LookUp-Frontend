import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useHistory } from "react-router"
// import { useDispatch } from "react-redux"
// import { userActions } from "../modules/userModule"
// import { appActions } from "../modules/appModule"

const ApartmentForm: React.FC = () => {
  const history = useHistory()
  const [file, setFile] = useState(null)

  const onSubmit = ($event: React.FormEvent<HTMLFormElement>): void => {
    const apartment = {
      title: $event.target[0].value,
      price: $event.target[1].value,
      description: $event.target[2].value,
      file: file,
    }
    try {
      // login(user).then((res): void => {
      //   history.push("/")
      // })
    } catch (e) {}
    $event.preventDefault()
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Available Apartments</h2>
      <Form onSubmit={onSubmit} style={{ minWidth: "400px" }}>
        <Form.Group controlId="title">
          <Form.Label>title</Form.Label>
          <Form.Control placeholder="Enter title" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>description</Form.Label>
          <Form.Control placeholder="Enter description" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>price</Form.Label>
          <Form.Control placeholder="Enter price" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="imageUrl">
          <Form.Label>price</Form.Label>
          <input type="file" name="file" onChange={e => setFile(e.target.files[0])} />
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
  )
}

export default ApartmentForm
