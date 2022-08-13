import styled from "styled-components";

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Container>
          <ModalWrapper>
            <ModalContent>
              <h3>Are you sure you want to delete this post?</h3>
              <div>
                <button>No, go back</button>
                <button>Yes, delete it</button>
              </div>
            </ModalContent>
          </ModalWrapper>
        </Container>
      ) : null}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2 !important;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 20%;
  height: auto;
  padding: 80px;
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  background-color: #333333;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  h3 {
    color: white;
    font-size: 22px;
    text-align: center;
  }
  div {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

    button:last-child {
      font-weight: 500;
      font-family: "Lato";
      color: #ffffff;
      background-color: #1877f2;
    }
  }
  button {
    border-radius: 5px;
    width: 135px;
    height: 35px;
    padding: 5px;
    border: thin solid #333333;
    color: #1877f2;
    font-family: "Lato";
    font-weight: 500;
    cursor: pointer;
  }
`;
