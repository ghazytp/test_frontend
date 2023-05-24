export default function SelectAspekPenilaian({
  idMahasiswa,
  aspek,
  handleOnChange,
}) {
  const rangeNilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <select
        onChange={(e) => handleOnChange(idMahasiswa, aspek, e.target.value)}
        name=""
        id=""
        className="border-2 border-gray-400 w-24 px-2 rounded-md"
      >
        {rangeNilai.map((nilai, index) => {
          return (
            <option value={nilai} key={index}>
              {nilai}
            </option>
          );
        })}
      </select>
    </>
  );
}
