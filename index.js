const Button = (props) => {
  const { className, text } = props;
  return <button className={`${className}`}>{text}</button>;
};

const element = (
  <div className="container">
    <div className="elements">
      <h1 className="heading">Social Buttons</h1>
      <div className="btn-container">
        <Button className="like" text="Like" />
        <Button className="comment" text="Comment" />
        <Button className="share" text="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
