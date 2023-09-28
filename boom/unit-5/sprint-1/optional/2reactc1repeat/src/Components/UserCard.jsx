











import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types"

const UserCard = ({imageURL,avatarShape,name,description,backgroundColor,title}) => {
  console.log(avatarShape)
  return (
    <div data-testid="usercard" 
   

    style={{
    backgroundColor: `${backgroundColor}`}}  >
      <img width={"200px"} src={imageURL} alt="img" />

      <h3>{name}</h3> 

      <br />

      <br />

      <p>{title}</p>
      <p>{description}</p>


    </div>
  );
};

export default UserCard;


UserCard.propTypes = {

  description: PropTypes.string,

  backgroundColor: PropTypes.string,
  name : PropTypes.string.isRequired,

  

  imageURL: PropTypes.string,

  avatarShape: PropTypes.string,

 

  title: PropTypes.string,
}