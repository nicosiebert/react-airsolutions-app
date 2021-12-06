import "../styles/section.css";
let styles = {
  background: "url('assets/peronas.png')",
  backgroundSize: "auto 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  objectFit: "cover",
  width: "100%",
  height: "100%",
  display: "flex"
};
function SectionIndex() {
  return (
    <>
      <section className="section-section" style={styles}>
        <h3 className="section-title">we provide solutions</h3>
      </section>
    </>
  );
}

export default SectionIndex;
