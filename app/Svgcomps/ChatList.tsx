import React from "react";

function ChatList({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M15 5.57692C15 5.2913 14.8865 5.01738 14.6846 4.81542C14.4826 4.61346 14.2087 4.5 13.9231 4.5H11.7692V2.34615C11.7692 2.06053 11.6558 1.78661 11.4538 1.58465C11.2518 1.38269 10.9779 1.26923 10.6923 1.26923H2.07692C1.79131 1.26923 1.51739 1.38269 1.31542 1.58465C1.11346 1.78661 1 2.06053 1 2.34615V10.9615C1.00032 11.0628 1.0292 11.162 1.08334 11.2476C1.13748 11.3332 1.21468 11.4019 1.30606 11.4456C1.39744 11.4893 1.4993 11.5064 1.59994 11.4948C1.70058 11.4832 1.79592 11.4435 1.875 11.3802L4.23077 9.48076V11.5C4.23077 11.7856 4.34423 12.0595 4.54619 12.2615C4.74816 12.4635 5.02207 12.5769 5.30769 12.5769H11.607L14.125 14.611C14.2203 14.688 14.339 14.7303 14.4615 14.7308C14.6043 14.7308 14.7413 14.674 14.8423 14.5731C14.9433 14.4721 15 14.3351 15 14.1923V5.57692ZM12.1361 11.6198C12.0408 11.5427 11.9221 11.5005 11.7995 11.5H5.30769V9.34615H10.6923C10.9779 9.34615 11.2518 9.23269 11.4538 9.03073C11.6558 8.82876 11.7692 8.55484 11.7692 8.26923V5.57692H13.9231V13.0649L12.1361 11.6198Z" />
    </svg>
  );
}

export default ChatList;
