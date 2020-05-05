import * as React from "react"
import { shallow } from "enzyme"
import Login from "../pages/login/Login"
import * as reactRedux from "react-redux"

jest.mock("react-router", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}))
jest.spyOn(reactRedux, "useDispatch").mockImplementation(jest.fn())
test("Login renders without crashing", () => {
  beforeEach(() => {})
  const wrapper = shallow(<Login />)

  // // Interaction demo
  expect(wrapper.exists()).toBe(true)
})
