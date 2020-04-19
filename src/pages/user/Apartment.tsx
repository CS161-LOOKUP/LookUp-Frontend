import React from "react"
import { ApartmentType } from "../../store/apartment"
import { RootState } from "../../store/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import { Card, Button, CardColumns } from "react-bootstrap"
import { useHistory } from "react-router"

const GetUserApartments: React.FC = () => {
  const history = useHistory()
  const apartments: ApartmentType[] = useSelector((state: RootState) => state.currentUser.user.createdApartments)
  const handleClick = id => {
    console.log(id)
    history.push(`/apartment/${id}/edit`)
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Your posted Apartments</h2>

      <CardColumns style={{ maxWidth: "76%" }}>
        {apartments.length ? (
          apartments.map(apartment => (
            <Card key={apartment._id}>
              <Card.Img
                variant="top"
                src="https://media.gettyimages.com/photos/idyllic-home-with-covered-porch-picture-id479767332?s=612x612"
              />
              <Card.Body>
                <Card.Title>{apartment.title}</Card.Title>
                <Card.Text>{apartment.description}</Card.Text>
                <Card.Text>monthly price: ${apartment.price}</Card.Text>
                <Button style={{ marginRight: "10px" }} onClick={() => handleClick(apartment._id)} variant="primary">
                  Edit
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div>you have not created any apartment yet</div>
        )}
      </CardColumns>
    </div>
  )
}

export default GetUserApartments
