import { getUser } from "../services/authService"
import { treatErrors } from "./global"

async function loadUser(id, setUser) {
    try {
      const { data: user } = await getUser(id)

      setUser(user)
    } catch (err) {
      treatErrors(err)
    }
}

export { loadUser }