const initialState = {
  isAdmin: false,
  userInfo: {}
}

// state=initialState şu demek: state başlangıçta bu değere(initialState'e) sahip olsun
const userReducer = (state=initialState, action) => {
    switch (action.type) {
      case "LOGIN_USER":
        return state;
  
      case "LOGOUT_USER":
        return state;
  
      default:
        return state;
    }
  };
  
  export default userReducer