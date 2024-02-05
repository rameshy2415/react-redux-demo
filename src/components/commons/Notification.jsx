import PropTypes from "prop-types";
import classes from "./Notification.module.css";
import { Card } from "react-bootstrap";


const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <Card className={classes.card_width}>
      <section className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </section>
    </Card>
  );
};

export default Notification;

Notification.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
};
