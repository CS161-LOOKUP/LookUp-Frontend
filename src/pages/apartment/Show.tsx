import React, { useEffect } from "react"
import { ApartmentType, getApartment, apartmentsAction } from "../../store/apartment"
import { RootState } from "../../store/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import { Card, Button } from "react-bootstrap"
import { useHistory, useParams } from "react-router"

const ShowApartment: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()

  const selectedApartment: ApartmentType = useSelector((state: RootState) => state.apartments.selectedApartment)
  const isLoading: boolean = useSelector((state: RootState) => state.apartments.isInitializing)

  useEffect(() => {
    dispatch(getApartment(id))
  }, [])

  const handleClick = id => {
    console.log(id)
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
      </div>
    </div>
  ) : (
    <div>Loading</div>
  )
}

export default ShowApartment
