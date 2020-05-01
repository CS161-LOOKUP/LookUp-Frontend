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
    history.push(`/apartment/${id}`)
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Your posted Apartments</h2>

      <CardColumns style={{ maxWidth: "76%" }}>
        {apartments.length ? (
          apartments.map(apartment => (
            <Card style={{ borderRadius: "20px" }} key={apartment._id}>
              <Card.Img
                variant="top"
                style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                src={apartment.imageURL}
              />
              <Card.Body>
                <Card.Title>{apartment.title}</Card.Title>
                <Card.Text>{apartment.description}</Card.Text>
                <Card.Text>monthly price: ${apartment.price}</Card.Text>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => handleClick(apartment._id)}
                  variant="outline-primary"
                >
                  Detail
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
