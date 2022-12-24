import styled from "styled-components";
export const MainBannerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 3rem 0;

  &.pink {
    background-color: var(--pink-orange);
  }

  &.green {
    background-color: var(--light-green);
  }

  .description_container {
    flex: 1 0 200px;
    text-align: center;

    .main_title {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
  }

  .img_container {
    flex: 1 0 200px;
    & > img {
      border-radius: 20px;
      display: block;
      margin: 0.5rem auto;
      height: 600px;
    }
  }
`;
