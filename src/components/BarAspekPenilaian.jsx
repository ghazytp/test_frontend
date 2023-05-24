import SelectAspekPenilaian from "./SelectAspekPenilaian";

export default function BarAspekPenilaian({
  noMahasiswa,
  changeAspekPenilaian,
}) {
  const totalAspekPenilaian = [1, 2, 3, 4];

  return (
    <div className="bg-white border-2 border-gray-400 p-2 rounded-md flex justify-end self-end gap-4 mb-2">
      <div className="flex items-center justify-between gap-2 w-36 mr-4">
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        <p>Mahasiswa {noMahasiswa}</p>
      </div>

      {totalAspekPenilaian.map((aspek, index) => {
        return (
          <SelectAspekPenilaian
            key={index}
            idMahasiswa={noMahasiswa}
            aspek={aspek}
            handleOnChange={changeAspekPenilaian}
          />
        );
      })}
    </div>
  );
}
