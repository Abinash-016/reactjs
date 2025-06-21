import styled from "styled-components";

const myImg = "/PASSPORT.png";

const Heading = styled.h1`
  display: flex;
  flex-direction: column;    
  align-items: center;       
  gap: 10px;     
  color: white;
  border: 3px solid #777;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;       
  font-weight: bold;
`;


function StyledComponent() {
  return (
    <div>
      <img
        src={myImg}
        alt="Profile"
        style={{
          width: "200px",
          border: "3px solid #777",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
      <Heading>Abinash Mohapatra</Heading>
      <Heading>Software developer, 2026</Heading>
    </div>
  );
}

export default StyledComponent;
