function User(props) {
  console.log("Usewr component props", props);
  return (
    <>
      <li>{props.userData.username}</li>
      <li>{props.userData.email}</li>
      <li>{props.userData.phoneno}</li>
      <li>{props.userData.password}</li>
    </>
  );
}

export default User;
