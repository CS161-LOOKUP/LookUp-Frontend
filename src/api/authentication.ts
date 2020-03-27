import { instance } from "./config"

export async function login(user: { email: string; password: string }) {
  try {
    const res = await instance.post("/user/login", user)
    localStorage.setItem("token", res.data.token)
    return { user: res.data.user }
  } catch (error) {
    console.log("error")
    throw error
  }
}

export function logout() {
  localStorage.removeItem("token")
}

export async function signup(user: {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  password: string
  interests: string[]
}) {
  try {
    const res = await instance.post("/user/createUser", user)
    return { user: res.data.user }
  } catch (error) {
    console.log("error")

    throw error
  }
}
