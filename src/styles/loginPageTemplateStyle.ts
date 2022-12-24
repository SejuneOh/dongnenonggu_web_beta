import styled from "styled-components";
export const LoginPageTemplateStyle = styled.div`
  width: 450px;
  height: 100vh;
  margin: 0 auto;
  background-color: var(--light-white);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);

  .login_logo_wrapper {
    text-align: center;
    padding-top: 4rem;
  }

  .login_input_container {
    margin-top: 3rem;
    padding: 2rem;

    .login_input_title {
      font-weight: 700;
    }
  }

  .login_option_container {
    padding: 0 2rem;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login_submit_container {
    padding: 2rem;
    margin-top: 20px;
  }
`;
