import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { createApartment, getApartment, ApartmentType } from "../../store/apartment"
import { useParams } from "react-router"
import { RootState } from "../../store/rootReducer"
// import { userActions } from "../modules/userModule"
// import { appActions } from "../modules/appModule"

const EditApartment: React.FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const selectedApartment: ApartmentType = useSelector((state: RootState) => state.apartments.selectedApartment)

  useEffect(() => {
    dispatch(getApartment(id))
  }, [])

  console.log(selectedApartment)

  const onSubmit = ($event: React.FormEvent<HTMLFormElement>): void => {
    const apartment = {
      title: $event.target[0].value,
      description: $event.target[1].value,
      price: $event.target[2].value,
      imageURL: $event.target[3].value,
    }
    try {
      dispatch(createApartment(apartment))
    } catch (e) {}
    $event.preventDefault()
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Form onSubmit={onSubmit} style={{ minWidth: "400px" }}>
        <Form.Group controlId="title">
          <Form.Label>title</Form.Label>
          <Form.Control placeholder="Enter title" value={selectedApartment.title} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>description</Form.Label>
          <Form.Control placeholder="Enter description" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>price</Form.Label>
          <Form.Control placeholder="Enter price" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="imagePath">
          <Form.Label>image</Form.Label>
          <Form.Control placeholder="Enter image path" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default EditApartment
