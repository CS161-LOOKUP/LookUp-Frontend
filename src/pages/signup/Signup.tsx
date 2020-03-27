import React from "react"
import { Form, Button } from "react-bootstrap"
import { signup } from "../../api/authentication"
import { useHistory } from "react-router"
import TagsInput from "../../components/TagsInput/TagsInput"

const Signup: React.FC = () => {
  const [tags, setTags] = React.useState<string[]>([])

  const handleAdd = (tag: string) => {
    console.log(tag)
    setTags([...tags, tag])
  }

  const removeTags = (index: number) => {
    console.log(index)
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)])
  }
  const history = useHistory()
  // const dispatch = useDispatch()
  const onSubmit = ($event: React.FormEvent<HTMLFormElement>): void => {
    const user = {
      // @ts-ignore
      firstName: $event.target[0].value,
      // @ts-ignore
      lastName: $event.target[1].value,
      // @ts-ignore
      email: $event.target[2].value,
      // @ts-ignore
      phoneNumber: $event.target[3].value,
      // @ts-ignore
      password: $event.target[4].value,
      // @ts-ignore
      interests: tags,
    }
    try {
      console.log(user)
      signup(user).then((res): void => {
        console.log(res)
        history.push("/login")
      })
    } catch (e) {
      console.log(e)
      throw e
    }
    $event.preventDefault()
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Form
        onKeyPress={event => {
          if (event.which === 13 /* Enter */) {
            event.preventDefault()
          }
        }}
        onSubmit={onSubmit}
        style={{ minWidth: "400px" }}
      >
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="Enter your first name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Enter your last name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>phone number</Form.Label>
          <Form.Control placeholder="Enter your phone number" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Interests</Form.Label>
          <TagsInput tags={tags} handleAdd={handleAdd} handleRemove={removeTags} />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </Form>
      <Button className="" variant="link" onClick={() => history.push("/login")}>
        have account?
      </Button>
    </div>
  )
}

export default Signup
