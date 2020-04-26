import React, { useEffect } from "react"
import { ApartmentType, fetchApartments } from "../../store/apartment"
import { RootState } from "../../store/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import { Card, Button, CardColumns } from "react-bootstrap"
import { useHistory } from "react-router"

const GetFavoriteApartments: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const favorites: string[] = useSelector((state: RootState) => state.currentUser.user.favorites)
  const apartments: ApartmentType[] = useSelector((state: RootState) => state.apartments.apartments)

  useEffect(() => {
    dispatch(fetchApartments())
  }, [])
  const handleClick = id => {
    console.log(id)
    history.push(`/apartment/${id}`)
  }
  console.log(favorites)

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Your favorite Apartments</h2>
      <CardColumns style={{ maxWidth: "76%" }}>
        {apartments.filter(apart => favorites.includes(apart._id)).length ? (
          apartments
            .filter(apart => favorites.includes(apart._id))
            .map(apartment => (
              <Card style={{ borderRadius: "20px" }} key={apartment._id}>
                <Card.Img
                  variant="top"
                  style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                  src="https://media.gettyimages.com/photos/idyllic-home-with-covered-porch-picture-id479767332?s=612x612"
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
          <div>you have not added any apartment yet</div>
        )}
      </CardColumns>
    </div>
  )
}

export default GetFavoriteApartments
