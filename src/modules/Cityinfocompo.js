import styled from "styled-components";

const Weatherlogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const City = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

// const Btnlogo = styled.button`

// `;

const SearchFunc = styled.form`
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  border-radius: 2px;
  color: black;
  margin: 20px auto;

  & input {
    padding: 17px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;

  }
  & button {
    width: 50px;
    height: 50px;
    background: url("/images/search.png") no-repeat center;
    background-color: white;
    background-size: cover;
    border: none;
    cursor:pointer;

  }
`;

const Cityinfocompo = (props) => {
  const { updatecity,fetchweather } = props;
  return (
    <>
      <Weatherlogo src="/images/happy-day.png" />
      <City>You Want to Check Weather of Your City?</City>
      <SearchFunc onSubmit={fetchweather}>
        <input type="text" placeholder="Enter City...." onChange={(e) => updatecity(e.target.value)} />
        <button type="submit"></button>
      </SearchFunc>
    </>
  );
};

export default Cityinfocompo;
