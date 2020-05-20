// import actions from './actions';

// const fetchUser = async ({ email, password }) => {
//     const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`,
//         { method: 'GET' }
//     );
//     const [json] = await res.json();

//     return json;
// }

// export const getUser = (user) =>
//     async (dispatch) => {
//         const currentUser = await fetchUser(user);
//         dispatch(actions.setCurrentUser(currentUser))
//     }
