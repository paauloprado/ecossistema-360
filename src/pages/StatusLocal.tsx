import { ComponentType } from "react";
import { useUnitName } from "../utils/fakerJs";
import { useTranslation } from "react-i18next";

type Props = {
  unitname: string;
  lastUpdate: string;
  availableStorage: string;
  descriptionServices: string;
}

export const StatusLocal: ComponentType<Props> = (props) => {
  const { t } = useTranslation();
  return <div className="rounded-md shadow shadow-md p-2 border border-2">
    <div className="flex flex-col min-w-[200px] min-h-[200px] gap-2">
      <span className="font-bold text-2xl truncate">{props.unitname}</span>
      <div>
        <p className="text-xs">{t('subpages.higiaDashboard.storage')}:</p>
        <span className="font-bold text-4xl text-sky-800 pl-2">{props.availableStorage}</span>
      </div>
      <div>
        <p className="text-xs">{t('subpages.higiaDashboard.lastupdate')}:</p>
        <span className="text-md font-bold text-sky-800 pl-2">{props.lastUpdate}</span>
      </div>
      <span className="text-md font-bold text-green-600">{props.descriptionServices}</span>
    </div>
  </div>
}

export const StatusLocalWithDataFormatted: ComponentType<{
  unitname: string;
  lastUpdate: string;
  activated_services: number;
  availableStorage: number;
}> = ({
  unitname,
  availableStorage,
  lastUpdate,
  activated_services,
}) => {
    const descriptionServices = activated_services > 0
      ? `${activated_services} serviços estão ativos`
      : "Nenhum serviço ativo";

    const lastUpdateFormatted = lastUpdate && (() => {
      const now = new Date();
      const updated = new Date(lastUpdate);
      const diffMs = now.getTime() - updated.getTime();

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      let result = []
      if (!!days) result.push(`${days}d`);
      if (!!hours) result.push(`${hours}h`);
      if (!!minutes) result.push(`${minutes}m`);
      return `${result.join(" ")} atrás`;
    })();

    return (
      <StatusLocal
        unitname={unitname}
        availableStorage={`${availableStorage}Gb`}
        lastUpdate={lastUpdateFormatted}
        descriptionServices={descriptionServices}
      />
    );
  };
