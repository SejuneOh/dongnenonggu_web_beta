import styled from "styled-components";
export const RegisterPageTemplateStyle = styled.div`
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
  .register_alert_email_corret {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  }

  .register_submit_wrapper {
    padding: 2rem;
  }
`;
