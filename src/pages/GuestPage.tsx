import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GuestPageTemplate from "../components/Templates/GuestPageTemplate";
import { DefaultTemplate } from "../styles/defaultMainTemplate";

export default function GuestPage() {
  // boardKey
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!id) return;
  }, []);

  return (
    <DefaultTemplate>
      <GuestPageTemplate id={id ? id : ""} />
    </DefaultTemplate>
  );
}
