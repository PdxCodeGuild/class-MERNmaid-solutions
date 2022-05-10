import Button from 'react-bootstrap/Button';

const DarkMode = (props) => {
  return (
    <div id="darkMode">
      <Button onClick={props.darken} variant="dark">{props.dark ? "Lighten" : "Darken"}</Button>
    </div>
  );
};

export default DarkMode;
