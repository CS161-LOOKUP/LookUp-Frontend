import * as React from "react"
import { shallow } from "enzyme"
import CreateApartment from "../pages/apartment/New"
import * as reactRedux from "react-redux"

jest.mock("react-router", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}))
jest.spyOn(reactRedux, "useDispatch").mockImplementation(jest.fn())
jest.spyOn(reactRedux, "useSelector").mockImplementation(jest.fn())
jest.spyOn(React, "useState").mockImplementation(jest.fn())

test("Create apartment pages renders without crashing", () => {
  beforeEach(() => {})
  const wrapper = shallow(<CreateApartment />)

  // // Interaction demo
  expect(wrapper.exists()).toBe(true)
})
