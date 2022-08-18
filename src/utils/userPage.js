import { getUser } from "../services/authService"
import { follow, getUserFollow, unfollow } from "../services/followerService"
import { treatErrors } from "./global"

async function loadUser(id, setUser, token) {
  try {
    const { data: user } = await getUser(id, token)

    setUser(user)
  } catch (err) {
    treatErrors(err)
  }
}

async function loadUserFollow(setUserFollow, name, userId, username, token) {
  if (name === username) return

  const { data: follow } = await getUserFollow(userId, token)

  if (follow.userFollow === 1) {
    setUserFollow(true)
  }
}

async function followUnfollowUser(setLiking, setUserFollow, userFollow, userId, token) {
  if (userFollow) {
    setLiking(true)

    const { status } = await unfollow(userId, token)

    if (status === 200) {
      setUserFollow(false)
    }

    setLiking(false)
  } else {
    setLiking(true)

    const { status } = await follow(userId, token)

    if (status === 201) {
      setUserFollow(true)
    }

    setLiking(false)
  }
}

export { loadUser, loadUserFollow, followUnfollowUser }