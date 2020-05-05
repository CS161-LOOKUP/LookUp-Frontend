import React, { useEffect, useState } from "react"
import { ApartmentType, fetchApartments } from "../../store/apartment"
import { RootState } from "../../store/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import { Card, Button, CardColumns } from "react-bootstrap"
import { useHistory } from "react-router"
import { getUserInfo } from "../../store/currentUser"

const GetApartments: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const apartments: ApartmentType[] = useSelector((state: RootState) => state.apartments.apartments)
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    dispatch(fetchApartments())
    dispatch(getUserInfo())
  }, [])
  const handleClick = id => {
    console.log(id)
    history.push(`/apartment/${id}`)
  }
  // const handleClickFav = id => {
  //   dispatch(addFavorite(id))
  // }

  const handleChange = event => {
    setSearchWord(event.target.value)
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <input
        className="mb-3"
        style={{
          width: "400px",
          padding: "3px 15px",
          outline: "none",
          border: "1px solid #CECECE",
          borderRadius: "20px",
        }}
        placeholder="type apartment name..."
        type="text"
        value={searchWord}
        onChange={handleChange}
      />

      <h2>Available Apartments</h2>
      <div className="mb-3">
        We show the available apartments posted by users who has similarities with you according to your answers
      </div>

      {/* <div className="d-flex flex-row flex-wrap  align-items-start" style={{ marginLeft: "20px", maxWidth: "80%" }}> */}
      <CardColumns style={{ maxWidth: "70%" }}>
        {apartments
          .filter(apartment => apartment.title.startsWith(searchWord))
          .map(apartment => (
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
          ))}
        {/* </div> */}
      </CardColumns>
    </div>
  )
}

export default GetApartments
