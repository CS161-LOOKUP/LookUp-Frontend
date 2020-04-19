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
    <div className="d-flex flex-row align-items-center">
      <div style={{ margin: "10px", width: "18rem" }}>
        <img src="https://media.gettyimages.com/photos/idyllic-home-with-covered-porch-picture-id479767332?s=612x612" />
        <div>
          <title>{selectedApartment.title}</title>
          <div>{selectedApartment.description}</div>
          <div>{selectedApartment.price}</div>
        </div>
        {!favorites.includes(selectedApartment._id) ? (
          <Button onClick={() => handleClickFav(selectedApartment._id)} variant="primary">
            Add to Favorites
          </Button>
        ) : (
          <div>Added to Favorites</div>
        )}
      </div>
    </div>
  ) : (
    <div>Loading</div>
  )
}

export default ShowApartment
