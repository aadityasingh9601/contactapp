import { useState, useEffect } from "react";
import Contact from "./Contact";
import axios from "axios";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/contacts", {
          withCredentials: true,
        });
        console.log(res);
        setContacts(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      {contacts?.map((contact) => (
        <Contact key={contact?.id} contact={contact} />
      ))}
    </div>
  );
}
