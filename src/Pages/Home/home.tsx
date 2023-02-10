import Airplane from "../../assets/airplane.svg";
import QrCode from "../../assets/qrcode.svg";

export default function Home() {
  return (
    <div className="static h-screen w-screen bg-gradient-to-br from-indigo-500 via-indigo-700 to-indigo-800 flex flex-col items-center justify-center font-Rubik ">
      <div className="font-bold text-white text-xl mb-3">
        Cartão de Embarque
      </div>
      <div className="w-full max-w-xs bg-white px-6 py-6 rounded-t-3xl flex flex-col items-center justify-center gap-3 relative drop-shadow-2xl">
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="text-left text-gray-500">Voo</p>
            <p className="font-semibold text-lg">RS955</p>
          </div>
          <div>
            <p className="text-right text-gray-500">Data</p>
            <p className="font-semibold text-lg">23/05/2023</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="text-left text-gray-500 text-sm">Cuiabá, BR</p>
            <p className="font-semibold text-left text-5xl">RGU</p>
            <p className="text-left ">13:10</p>
          </div>
          <img src={Airplane} />
          <div>
            <p className="text-right text-gray-500 text-sm">São Paulo, BR</p>
            <p className="font-semibold text-right text-5xl">SFO</p>
            <p className="text-right ">17:30</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-xs bg-white px-6 py-6 border-t-2 border-dashed flex flex-col items-center justify-center gap-4 relative drop-shadow-2xl">
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="text-left text-gray-500">Passageira</p>
            <p className="font-semibold text-lg">Brenda Caroline</p>
          </div>
          <div>
            <p className="text-right text-gray-500">Assento</p>
            <p className="font-semibold text-lg text-right">28A</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-xs bg-white px-6 py-6 border-t-2 rounded-b-3xl border-dashed flex flex-col items-center justify-center gap-4 relative drop-shadow-2xl">
        <div className="w-full flex justify-between ">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-gray-500">Embarque</p>
              <p className="text-center text-white bg-violet-800 font-semibold p-1 rounded-lg">
                13:00
              </p>
            </div>
            <div>
              <p className="text-gray-500">Terminal</p>
              <p className="font-semibold">2</p>
            </div>
            <div>
              <p className="text-gray-500">Portão</p>
              <p className="font-semibold">15</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="flex-1" src={QrCode} />
            <p className="text-sm">Grupo de embarque: 3</p>
          </div>
        </div>
        <p className="text-sm">
          <strong>Atenção:</strong> o portão fecha 16:45
        </p>
      </div>

      <p className="w-full max-w-xs text-sm text-center text-gray-200 mt-3">
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </p>
    </div>
  );
}
