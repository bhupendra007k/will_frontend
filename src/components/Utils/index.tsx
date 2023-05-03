const isSuccess = 'access_token'

export const login = (data: string) => {
  localStorage.setItem(isSuccess, data)
}

export const logout = () => {
  localStorage.removeItem(isSuccess)
}

export const isLogin = () => {
  if (localStorage.getItem(isSuccess)) {
    return true
  }

  return false
}
