import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>This is your home page.</div>
      <div>
        <Button
          text={"Contacts"}
          onClick={() => {
            navigate("/contacts");
          }}
        />
        <Button
          text={"New Contact"}
          onClick={() => {
            navigate("/newcontact");
          }}
        />
      </div>
    </div>
  );
}
