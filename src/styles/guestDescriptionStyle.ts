import styled from "styled-components";

export const GuestDescriptionStyle = styled.div`
  position: relative;
  .guest_host_description_container {
    margin-top: 2rem;
    font-size: 24px;
  }

  .guest_qna_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  .guest_info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }
`;
