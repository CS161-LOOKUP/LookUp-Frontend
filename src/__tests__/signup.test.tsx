import * as React from "react"
import { shallow } from "enzyme"
import Signup from "../pages/signup/Signup"

jest.mock("react-router", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}))
test("Signup renders without crashing", () => {
  beforeEach(() => {})
  const wrapper = shallow(<Signup />)

  // // Interaction demo
  expect(wrapper.exists()).toBe(true)
})
