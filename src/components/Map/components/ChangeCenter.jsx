import { useMap } from "react-leaflet";
/* eslint-disable react/prop-types */
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default ChangeCenter;
