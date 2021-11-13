export const Button = () => {
  const div = {
    margin: "auto",
    width: "250px",
    height: "50px",
    textAlign: "center",
    backgroundColor: "#E5265A",
    color: "#ffffff",
    letterSpacing: "2%",
    lineHeight: "23px",
    fontSize: "24px",
    marginTop: "21%",
    borderRadius: "6px"
  };
  const pStyle = {
    paddingTop: "5%",
    marginBottom: "auto"
  };
  return (
    <>
      <div style={div}>
        <p style={pStyle}>Proceed</p>
      </div>
    </>
  );
};
