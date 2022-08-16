import { getUser } from "../services/authService"
import { treatErrors } from "./global"

async function loadUser(id, setUser, token) {
    try {
      const { data: user } = await getUser(id, token)

      setUser(user)
    } catch (err) {
      treatErrors(err)
    }
}

export { loadUser }