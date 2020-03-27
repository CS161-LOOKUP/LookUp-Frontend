import React, { useEffect } from "react"
import { ApartmentType, fetchApartments } from "../../store/apartment"
import { RootState } from "../../store/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import { Card, Button } from "react-bootstrap"

const GetApartments: React.FC = () => {
  const dispatch = useDispatch()

  const apartments: ApartmentType[] = useSelector((state: RootState) => state.apartments.apartments)
  useEffect(() => {
    dispatch(fetchApartments())
  }, [])

  return (
    <div className="d-flex flex-row align-items-center">
      {apartments.map(apartment => (
        <Card key={apartment._id} style={{ margin: "10px", width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media.gettyimages.com/photos/idyllic-home-with-covered-porch-picture-id479767332?s=612x612"
          />
          <Card.Body>
            <Card.Title>{apartment.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default GetApartments
