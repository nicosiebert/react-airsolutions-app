function FooterApp(props) {
  return (
    <>
      <div>
        <img className="img" src={props.link} alt={props.alt} />
        <h5>{props.alt}</h5>
      </div>
    </>
  );
}
function FooterReturn() {
  let links = [
    { link: "assets/index.png", alt: "index" },
    { link: "assets/jobs.png", alt: "jobs" },
    { link: "assets/profile.png", alt: "profile" }
  ];
  return links.map((src) => (
    <>
      <FooterApp link={src.link} alt={src.alt} />
    </>
  ));
}
export default FooterReturn;
