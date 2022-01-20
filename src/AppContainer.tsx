import React, { useEffect, useState } from "react";
import App from "./App";

import { getTasks, getCategories } from "./dbService";
import { modalNamesEnum } from "./models/enum/modalNames";
import { IModalStateInterface } from "./models/IModalStateInterface";
import { modalResultEnum } from "./models/enum/modalResultEnum";
import { modalActionsType } from "./models/enum/modalActionsType";
import { ICategoryItem } from "./models/ICategoryItem";
import { ITaskItem } from "./models/ITaskItem";
import ModalService from "./Services/ModalService";

export type ModalState = Record<modalNamesEnum, IModalStateInterface>;

const AppContainer = () => {
  const [modalState, setModalState] = useState<ModalState>({
    createEditModal: {
      entityType: undefined,
      action: modalActionsType.CREATE,
      open: false,
      lastResult: modalResultEnum.OK,
    },
    deleteModal: { open: false, lastResult: modalResultEnum.CANCEL },
  });
  return (
    <App
      // Изменение состояний для попапов
      setModalState={setModalState}
    />
  );
};

export default AppContainer;
