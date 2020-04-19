import React, { useEffect } from "react"
import { ApartmentType, fetchApartments } from "../../store/apartment"
import { RootState } from "../../store/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import { Card, Button, CardColumns } from "react-bootstrap"
import { useHistory } from "react-router"
import { addFavorite } from "../../store/currentUser"

const GetApartments: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const apartments: ApartmentType[] = useSelector((state: RootState) => state.apartments.apartments)
  const userApartmentIds: string[] = useSelector((state: RootState) => state.currentUser.user.createdApartments).map(
    apartment => apartment._id
  )
  const favorites: string[] = useSelector((state: RootState) => state.currentUser.user.favorites)

  useEffect(() => {
    dispatch(fetchApartments())
  }, [])
  const handleClick = id => {
    console.log(id)
    history.push(`/apartment/${id}`)
  }
  const handleClickFav = id => {
    dispatch(addFavorite(id))
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Available Apartments</h2>

      {/* <div className="d-flex flex-row flex-wrap  align-items-start" style={{ marginLeft: "20px", maxWidth: "80%" }}> */}
      <CardColumns style={{ maxWidth: "70%" }}>
        {apartments.map(apartment => (
          <Card key={apartment._id}>
            <Card.Img
              variant="top"
              src="https://media.gettyimages.com/photos/idyllic-home-with-covered-porch-picture-id479767332?s=612x612"
            />
            <Card.Body>
              <Card.Title>{apartment.title}</Card.Title>
              <Card.Text>{apartment.description}</Card.Text>
              <Card.Text>monthly price: ${apartment.price}</Card.Text>
              <Button style={{ marginRight: "10px" }} onClick={() => handleClick(apartment._id)} variant="outline-info">
                Detail
              </Button>
            </Card.Body>
          </Card>
        ))}
        {/* </div> */}
      </CardColumns>
    </div>
  )
}

export default GetApartments
