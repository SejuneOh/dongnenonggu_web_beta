import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  location: string;
}

const Map: React.FC<MapProps> = ({ location }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const option = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //positon
      level: 3,
    };

    var map = new window.kakao.maps.Map(container, option);
    var geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(location, function (result: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        var marker = new window.kakao.maps.Marker({
          map: map,
          position: coords,
        });

        if (result[0].address_name && result[0].x && result[0].y) {
          var infowindow = new window.kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;"><a href="https://map.kakao.com/link/map/${result[0].address_name},${result[0].y},${result[0].x}">우리들의 농구장</a></div>`,
          });
        } else {
          infowindow = new window.kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">우리들의 농구장</div>`,
          });
        }
        infowindow.open(map, marker);

        map.setCenter(coords);
        map.setDraggable(false); //drag 막기
        map.setZoomable(false); // 줌 막기
      }
    });
  }, [location]);
  return (
    <div className="App">
      <div id="map" style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default Map;
