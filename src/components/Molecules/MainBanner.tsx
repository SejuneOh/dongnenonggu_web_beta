import styled from "styled-components";
import mainBannerImg from "../../assets/banner1.jpg";
import { MainBannerStyle } from "../../styles/mainBannerStyler";

type TProps = {
  color: string;
  title: string;
  description: string;
  imageUrl: string;
  isLeft: boolean;
};

const MainBanner: React.FC<TProps> = ({
  color,
  title,
  description,
  imageUrl,
  isLeft,
}) => {
  return (
    <MainBannerStyle className={color}>
      {isLeft ? (
        <>
          <div className="img_container">
            <img src={imageUrl} alt="mainBanner" />
          </div>
          <div className="description_container">
            <article className="main_title">{title}</article>
            <article className="main_description">{description}</article>
          </div>
        </>
      ) : (
        <>
          <div className="description_container">
            <article className="main_title">{title}</article>
            <article className="main_description">{description}</article>
          </div>
          <div className="img_container">
            <img src={imageUrl} alt="mainBanner" />
          </div>
        </>
      )}
    </MainBannerStyle>
  );
};

export default MainBanner;
