import { useEffect, useState } from "react";
import axios from "axios";
import "./student-management.css"

export default function StudentData() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const [editID, seteditID] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => setData(result.data));
  }, []);

  function addStudent() {

    if (
      id.trim() === "" ||
      name.trim() === "" ||
      email.trim() === "" ||
      city.trim() === "" ||
      phone.trim() === ""
    ) {
      alert("Please fill all the details!")
      return;
    }

    const exist = data.some((student) => Number(student.id) === Number(id));
    if (exist) {
      alert("This id number already exists!");
      return;
    }

    const newStudent = {
      id: id,
      name: name,
      email: email,
      address: {
        city: city,
      },
      phone: phone,
    };

    setData((data) => [...data, newStudent]);
    setId("");
    setName("");
    setEmail("");
    setCity("");
    setPhone("");
  }

  const handleDel = (id) => {
    const deleted = data.filter((student) => student.id !== id);
    setData(deleted);
  };

  const handleEdit = (student) => {
    seteditID(student.id);
    setId(student.id);
    setName(student.name);
    setEmail(student.email);
    setCity(student.address.city);
    setPhone(student.phone);
  };

  const handleUpdate = () => {
    const updatedStudent = data.map((student) => {
      if (student.id === editID) {
        return {
          ...student,
          id: id,
          name: name,
          email: email,
          address: {
            city: city,
          },
          phone: phone,
        };
      }
      return student;
    });

    setData(updatedStudent);
    seteditID(null);
    setId("");
    setName("");
    setEmail("");
    setCity("");
    setPhone("");
  };

  return (
    <>
      ID :
      <input
        type="text"
        placeholder="enter id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      NAME :
      <input
        type="text"
        placeholder="enter id"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      EMAIL ID :
      <input
        type="text"
        placeholder="enter id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      CITY :
      <input
        type="text"
        placeholder="enter id"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      PHONE :
      <input
        type="text"
        placeholder="enter id"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {editID ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={addStudent}>Add</button>
      )}
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CITY</th>
            <th>CONTACT</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.address.city}</td>
              <td>{student.phone}</td>
              <td>
                <button onClick={() => handleEdit(student)}>edit</button>
              </td>
              <td>
                <button onClick={() => handleDel(student.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
