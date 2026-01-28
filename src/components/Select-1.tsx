import { Forward } from "@/lib/icons";

const Select1 = ({ title }: { title: string }) => {
  return (
    <div className="border-2 border-white rounded-2xl p-4">
      <h3 className="font-extrabold mb-2">{title}</h3>
      <div className="relative">
        <select className="appearance-none border-t-2 border-white w-full h-14 justify-center px-0 cursor-pointer focus:outline-none hover:text-black">
          <option value="1">Buenos Aires</option>
          <option value="2">Catamarca</option>
          <option value="3">Chaco</option>
          <option value="4">Chubut</option>
          <option value="5">Córdoba</option>
          <option value="6">Corrientes</option>
          <option value="7">Entre Ríos</option>
          <option value="8">Formosa</option>
          <option value="9">Jujuy</option>
          <option value="10">La Pampa</option>
          <option value="11">La Rioja</option>
          <option value="12">Mendoza</option>
          <option value="13">Misiones</option>
          <option value="14">Neuquén</option>
          <option value="15">Río Negro</option>
          <option value="16">Salta</option>
          <option value="17">San Juan</option>
          <option value="18">San Luis</option>
          <option value="19">Santa Cruz</option>
          <option value="20">Santa Fe</option>
          <option value="21">Santiago del Estero</option>
          <option value="22">Tierra del Fuego</option>
          <option value="23">Tucumán</option>
        </select>
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white text-lg">
          <span className="rotate-90 block">
            <Forward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Select1;
