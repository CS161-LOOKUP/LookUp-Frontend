import React, { useEffect } from "react"
import { ApartmentType, getApartment, apartmentsAction } from "../../store/apartment"
import { RootState } from "../../store/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import { Card, Button } from "react-bootstrap"
import { useHistory, useParams } from "react-router"
import { addFavorite, deleteApartment, getUserInfo } from "../../store/currentUser"

const ShowApartment: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()

  const selectedApartment: ApartmentType = useSelector((state: RootState) => state.apartments.selectedApartment)
  const isLoading: boolean = useSelector((state: RootState) => state.apartments.isInitializing)
  const favorites: string[] = useSelector((state: RootState) => state.currentUser.user.favorites)
  const createdApartments: ApartmentType[] = useSelector((state: RootState) => state.currentUser.user.createdApartments)

  useEffect(() => {
    dispatch(getApartment(id))
  }, [])

  const handleClickFav = id => {
    dispatch(addFavorite(id))
  }

  const handleClickDelete = id => {
    dispatch(deleteApartment(id))
    dispatch(getUserInfo())
  }

  return selectedApartment ? (
    <div className="d-flex flex-row align-items-center justify-content-center">
      <div style={{ padding: "40px", backgroundColor: "#ffff", borderRadius: "20px" }}>
        <img src={selectedApartment.imageURL} />
        <div>
          <div className="mt-2">Name</div>
          <h4>{selectedApartment.title}</h4>
          <div className="mt-2">Description</div>
          <h4>{selectedApartment.description}</h4>
          <div className="mt-2 ">Monthly Price</div>
          <h4 className="mb-2">{selectedApartment.price}</h4>
        </div>
        {createdApartments.map(a => a._id).includes(selectedApartment._id) ? (
          <Button onClick={() => handleClickDelete(selectedApartment._id)} variant="warning">
            Delete
          </Button>
        ) : !favorites.includes(selectedApartment._id) ? (
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
