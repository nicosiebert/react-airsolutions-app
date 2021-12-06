let menu_styles = {
  width: "300px",
  height: "100vh",
  background: "#000",
  position: "absolute"
};
function MenuNav() {
  return (
    <>
      <div className="hidden" style={menu_styles}></div>
    </>
  );
}
export default MenuNav;
