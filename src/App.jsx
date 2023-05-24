import { useState } from "react";
import BarAspekPenilaian from "./components/BarAspekPenilaian";

function App() {
  const [aspekPenilaian, setAspekPenilaian] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_2: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_3: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_4: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
  });

  const [viewResult, setViewResult] = useState(false);

  const changeAspekPenilaian = (idMahasiwa, idAspekPenilaian, nilai) => {
    let mahasiswa = {
      ...aspekPenilaian[`aspek_penilaian_${idAspekPenilaian}`],
      [`mahasiswa_${idMahasiwa}`]: Number(nilai),
    };
    let data = {
      ...aspekPenilaian,
      [`aspek_penilaian_${idAspekPenilaian}`]: mahasiswa,
    };
    setAspekPenilaian(data);
    setViewResult(false);
  };

  const simpanNilai = (e) => {
    e.preventDefault();
    setViewResult(true);
  };

  return (
    <div className="App">
      <section className="flex justify-center items-start h-[100vh] mx-auto">
        <div className="flex flex-col justify-center items-center py-8 pb-12">
          <p className="text-center text-3xl mb-8">Aspek Penilaian Mahasiswa</p>
          <div className="p-2 flex justify-end self-end gap-4 w-fit">
            <div className="w-24 text-center">Aspek Penilaian 1</div>
            <div className="w-24 text-center">Aspek Penilaian 2</div>
            <div className="w-24 text-center">Aspek Penilaian 3</div>
            <div className="w-24 text-center">Aspek Penilaian 4</div>
          </div>

          {Object.keys(aspekPenilaian.aspek_penilaian_1).map((value, index) => {
            return (
              <BarAspekPenilaian
                key={index}
                noMahasiswa={index + 1}
                changeAspekPenilaian={changeAspekPenilaian}
              />
            );
          })}

          <button
            onClick={simpanNilai}
            className="bg-gray-800 w-fit text-white px-4 py-1 rounded-md self-end mt-12"
          >
            SIMPAN
          </button>

          {viewResult ? (
            <div className="border-2 border-gray-400 p-4 mt-12 rounded-md w-full relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setViewResult(false);
                }}
                className="absolute right-4 -top-8 bg-red-500 w-fit text-white px-4 py-1 rounded-md self-end mt-12"
              >
                CLOSE
              </button>
              <pre>
                {JSON.stringify(aspekPenilaian, null, 4).replace(
                  /"([^"]+)":/g,
                  "$1:"
                )}
              </pre>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
