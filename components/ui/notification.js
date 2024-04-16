import classes from "./notification.module.css";
import ReactDom from "react-dom";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  //   return ReactDom.createPortal(
  //     ((
  //       <div className={cssClasses}>
  //         <h2>{title}</h2>
  //         <p>{message}</p>
  //       </div>
  //     ),
  //     document.getElementById("notification"))
  //   );
  // }

  // Ensure that the DOM element exists before creating the portal
  const notificationRoot = document.getElementById("notification");
  if (!notificationRoot) return null; // Return null if element not found

  return ReactDom.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    notificationRoot
  );
}

export default Notification;
