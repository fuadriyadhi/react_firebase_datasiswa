import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsCardChecklist, AiOutlineAppstoreAdd } from "react-icons/all";

export default function Dashboard() {
  return (
    <main className="w-screen h-screen flex bg-slate-100">
      {/* SIDE MENU */}
      <aside className="w-[250px] h-full flex flex-col bg-green-600 text-white shadow-md">
        <div className="w-full h-[100px] flex justify-center items-center">
          <h1 className="text-2xl uppercase">Jvalley</h1>
        </div>

        <menu className="w-full flex flex-col">
          <Link to={"/dashboard"} className="w-full h-12 flex items-center px-3 hover:bg-green-700 focus:bg-green-700 focus:text-black gap-1">
            <BsCardChecklist />
            List Siswa
          </Link>
          <Link to={"/dashboard/add"} className="w-full h-12 flex items-center px-3 hover:bg-green-700 focus:bg-green-700 focus:text-black gap-1">
            <AiOutlineAppstoreAdd />
            Tambah Siswa
          </Link>
        </menu>
      </aside>
      {/* END SIDE MENU */}

      {/* DASHBOARD CONTENT */}
      <div className="flex-1 h-screen p-6 flex flex-col">
        <section className="w-full max-w-[1200px] mx-auto bg-white flex flex-col">
          <Outlet />
        </section>
      </div>
      {/* END DASHBOARD CONTENT */}
    </main>
  );
}
