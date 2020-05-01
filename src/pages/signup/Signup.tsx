import React, { Fragment } from "react"
import { Form, Button } from "react-bootstrap"
import { signup } from "../../api/authentication"
import { useHistory } from "react-router"
// import TagsInput from "../../components/TagsInput/TagsInput"

const Signup: React.FC = () => {
  // const [tags, setTags] = React.useState<string[]>([])
  const [music, setMusic] = React.useState<number[]>([1, 1, 1, 1])
  const [movie, setMovie] = React.useState<number[]>([1, 1, 1, 1])
  const [hobbiesInterests, setHobbiesInterests] = React.useState<number[]>([1, 1, 1, 1])

  // const handleAdd = (tag: string) => {
  //   console.log(tag)
  //   setTags([...tags, tag])
  // }

  // const removeTags = (index: number) => {
  //   console.log(index)
  //   setTags([...tags.filter(tag => tags.indexOf(tag) !== index)])
  // }

  const onChangeMusic = ($event, i: number) => {
    let newMusic = [...music]
    newMusic[i] = $event.target.value
    setMusic(newMusic)
  }

  const onChangeMovie = ($event, i: number) => {
    let newMovie = [...movie]
    newMovie[i] = $event.target.value
    setMovie(newMovie)
  }

  const onChangeHobbiesInterests = ($event, i: number) => {
    let newHobbiesInterests = [...hobbiesInterests]
    newHobbiesInterests[i] = $event.target.value
    setHobbiesInterests(newHobbiesInterests)
  }
  const history = useHistory()
  // const dispatch = useDispatch()
  const onSubmit = ($event: React.FormEvent<HTMLFormElement>): void => {
    const user = {
      firstName: $event.target[0].value,
      lastName: $event.target[1].value,
      email: $event.target[2].value,
      phoneNumber: $event.target[3].value,
      password: $event.target[4].value,
      music: music,
      movie: movie,
      hobbies_interests: hobbiesInterests,
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
    <div className="signUp d-flex flex-column align-items-center">
      <h2 className="mt-3">Sign up</h2>
      <Form
        onKeyPress={event => {
          if (event.which === 13 /* Enter */) {
            event.preventDefault()
          }
        }}
        onSubmit={onSubmit}
        style={{ minWidth: "400px" }}
      >
        <div className="form-card">
          <h4 className="category">General</h4>
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
        </div>

        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Interests</Form.Label>
          <TagsInput tags={tags} handleAdd={handleAdd} handleRemove={removeTags} />
        </Form.Group> */}
        <div className="form-card">
          <h4 className="category">Music</h4>
          {["Slow", "Fast", "Country", "Hiphop"].map((m, i) => (
            <Fragment key={m}>
              <Form.Group controlId={m}>
                <Form.Label>{m}</Form.Label>
                <Form.Control onChange={e => onChangeMusic(e, i)} as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Fragment>
          ))}
        </div>
        <div className="form-card">
          <h4 className="category">Movie</h4>
          {["Comedy", "Thriller", "Horrer", "Sci-Fi"].map((m, i) => (
            <Fragment key={m}>
              <Form.Group controlId={m}>
                <Form.Label>{m}</Form.Label>
                <Form.Control onChange={e => onChangeMovie(e, i)} as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Fragment>
          ))}
        </div>
        <div className="form-card">
          <h4 className="category">Hobbies</h4>
          {["Sports", "Shopping", "Pets", "Socilizing"].map((m, i) => (
            <Fragment key={m}>
              <Form.Group controlId={m}>
                <Form.Label>{m}</Form.Label>
                <Form.Control onChange={e => onChangeHobbiesInterests(e, i)} as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Fragment>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <Button className="signup-submit" type="submit">
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
