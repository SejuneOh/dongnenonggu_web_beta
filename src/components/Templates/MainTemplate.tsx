import React from "react";
import MainBanner from "../Molecules/MainBanner";
import mainBannerImg from "../../assets/banner1.jpg";
import banner1 from "../../assets/banner2.jpg";
import banner2 from "../../assets/banner3.jpg";

export default function MainTemplate() {
  return (
    <div>
      <MainBanner
        color="pink"
        title="당신 근처의 동네농구"
        description="동아리 농구, 게스트부터 호스트까지 다같이 농구를 즐겨요."
        imageUrl={mainBannerImg}
        isLeft={true}
      />{" "}
      <MainBanner
        color=""
        title="우리동네 농구 커뮤니케이션"
        description="농구를 즐기는 사람들과 함께 같이 농구해요"
        imageUrl={banner1}
        isLeft={false}
      />
      <MainBanner
        color="green"
        title="누구든 호스트 그리고 게스트"
        description="누구든, 호스트와 게스트를 쉽게 구하고 편하게 농구를 같이 즐겨요"
        imageUrl={banner2}
        isLeft={true}
      />
    </div>
  );
}
