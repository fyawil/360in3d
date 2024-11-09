import { PopupButton } from "react-calendly";


function Scheduler() {

    return (
      <>
        <div id='scheduler-container'>
          <PopupButton
          className='scheduler-button'
          url="https://calendly.com/fya_business/30min"
          /*
          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
          */
          rootElement={document.getElementById("root")}
          text="Book a Free Consultation!"
          />
        </div>
      </>
    )
  }
  
  export default Scheduler



   