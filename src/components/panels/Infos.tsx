import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { useTranslation } from "react-i18next";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  const { t } = useTranslation();
  return (
    <Panel title="Nola Jokatu" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
          Egunero herri bat <Worldle />
          n!
        </div>
        <div>
          Asmatu <Worldle /> 7 saiakeratan.
        </div>
        <div> Saiakera bakoitzean EHko herri bat sartu behar duzu.</div>
        <div>
          Saiakera bakotzaren ondoren herri hori non dagoen esango dizu asmatu
          behar den herriarekiko. Asmatu beharreko herritik distantzia eta
          norabidea adieraziko digu.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Adibideak</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Eskiula",
                direction: "SW",
                distance: 140_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Asmatu nahi den herritik{" "}
            {formatDistance(140000, settingsData.distanceUnit)}-tara dago{" "}
            <span className="uppercase font-bold">Eskiula</span>. Asmatu nahi
            den herria Hego Mendebaldean dago. %7a bakarrik gerturatu zara.
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Oion",
                direction: "SE",
                distance: 40_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Bigarren saiakera, <span className="uppercase font-bold">Oion</span>
            , gertuago dago! {formatDistance(40000, settingsData.distanceUnit)}
            km-tara. 73% gerturatu zara eta herri hori hego ekialdean dago!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Cascante",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            🎉 Zorionak! 🎉
            <span className="uppercase font-bold"> Cascante</span> zen asmatu
            beharreko herria!
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Distantziari buruz</div>
        <div>Distantziak herrien erdiguneen artekoak dira.</div>
        <div>
          Bi herri mugakideen artean
          {formatDistance(10_000, settingsData.distanceUnit)}-ko distantzia dela
          ere jarri dezake.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle />{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          WorLdle
        </a>
        n oinarritu da:{" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>
        -ek egindakoan.{" "}
        <a
          className="underline pl-1"
          href="https://www.ko-fi.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("buyMeACoffee")}
        </a>
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          <a
            className="underline"
            href="https://twitter.com/talaioskoop"
            target="_blank"
            rel="noopener noreferrer"
          >
            @TalaiosKoop
          </a>
          -ek Euskal Herriratua, Euskal Wikipedia eta Gaindegiaren laguntzaz.
        </div>
        <img
          className={`max-h-52 m-auto transition-transform duration-700 ease-in dark:invert h-full`}
          alt="EH irudia"
          src={`images/eh/eh.jpg`}
        />
      </div>
    </Panel>
  );
}
