export default function CardGenerator(props) {
  const icon = `${props.icon}`;
  const textbig = `${props.textbig}`;
  const textsmall = `${props.textsmall}`;
  return (
    <>
      <div className="card-format">
        <div className="icon-holder">
          <h2> {icon} </h2>
        </div>
        <h1>{textbig}</h1>
        <p>{textsmall}</p>
      </div>
    </>
  );
}
