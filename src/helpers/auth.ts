const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user") as any);

  if (user) {
    return { Authorization: "Bearer " + user };
    // return { "Token": user.accessToken };
  } else {
    return {};
  }
};
export default authHeader;
