import React, { useEffect } from "react"
import { ApartmentType, getApartment, apartmentsAction } from "../../store/apartment"
import { RootState } from "../../store/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import { Card, Button } from "react-bootstrap"
import { useHistory, useParams } from "react-router"
import { addFavorite } from "../../store/currentUser"

const ShowApartment: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()

  const selectedApartment: ApartmentType = useSelector((state: RootState) => state.apartments.selectedApartment)
  const isLoading: boolean = useSelector((state: RootState) => state.apartments.isInitializing)
  const favorites: string[] = useSelector((state: RootState) => state.currentUser.user.favorites)

  useEffect(() => {
    dispatch(getApartment(id))
  }, [])

  const handleClickFav = id => {
    dispatch(addFavorite(id))
  }

  return selectedApartment ? (
    <div className="d-flex flex-row align-items-center justify-content-center">
      <div style={{ padding: "40px", backgroundColor: "#ffff", borderRadius: "20px" }}>
        <img src="https://media.gettyimages.com/photos/idyllic-home-with-covered-porch-picture-id479767332?s=612x612" />
        <div>
          <div className="mt-2">Name</div>
          <h4>{selectedApartment.title}</h4>
          <div className="mt-2">Description</div>
          <h4>{selectedApartment.description}</h4>
          <div className="mt-2 ">Monthly Price</div>
          <h4 className="mb-2">{selectedApartment.price}</h4>
        </div>
        {!favorites.includes(selectedApartment._id) ? (
          <Button onClick={() => handleClickFav(selectedApartment._id)} variant="primary">
            Add to Favorites
          </Button>
        ) : (
          <div style={{ color: "#f99d14" }}>Added to Favorites</div>
        )}
      </div>
    </div>
  ) : (
    <div>Loading</div>
  )
}

export default ShowApartment
