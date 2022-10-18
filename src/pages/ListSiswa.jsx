import React, { useState, useEffect } from "react";
import { firestore } from "../config/firebaseConfig";
import { collection, getDoc, getDocs } from "firebase/firestore";

export default function ListSiswa() {
  //state
  const [dataSiswa, setDataSiswa] = useState([]);

  //get data dari fire base
  const getDataSiswa = async () => {
    let arrDataSiswa = [];
    let dataSiswaRef = await collection(firestore, "data_siswa");
    let compileData = await getDocs(dataSiswaRef).then((res) => {
      res.forEach((e) => {
        arrDataSiswa.push(e.data());
      });
    });
    return arrDataSiswa;
  };

  //comp life cycle
  useEffect(() => {
    getDataSiswa().then((res) => {
      setDataSiswa(res);
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl">List Siswa</h1>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="font-bold">Id</th>
            <th className="font-bold">Nama Lengkap</th>
            <th className="font-bold">NIS</th>
            <th className="font-bold">alamat</th>
            <th className="font-bold">dibuat</th>
            <th className="font-bold">action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {dataSiswa.map((e, i) => (
            <tr key={e.id}>
            <td>{i + 1}</td>
              <td>{e.nama_lengkap}</td>
              <td>{e.nis}</td>
              <td>{e.alamat}</td>
              <td>{e.createdAt}</td>
              <td>
                <div className="flex gap-2 items-center justify-center pt-4">
                  <button className="w-[80px] bg-orange-500 text-white rounded-md">edit</button>
                  <button className="w-[80px] bg-red-500 text-white rounded-md">delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
