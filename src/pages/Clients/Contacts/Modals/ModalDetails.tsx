import Icon from "@/assets/react.svg";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import ModalHeader from "@/components/ModalHeader";
import { TagsConstants } from "@/constants/constants";
import { useMyContactStore } from "@/stores/contacts";
import {
  extractCityAndCountry,
  maskDateISO,
  maskPhone,
} from "@/utils/functions";
import cx from "classnames";
import {
  // AtSign,
  CalendarDays,
  Mail,
  MapPinned,
  Phone,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPlaceholder from "../components/LoadingPlaceholder";

interface ModalDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalDetails: React.FC<ModalDetailsProps> = ({ isOpen, onClose }) => {
  const { selectedContact } = useMyContactStore();
  const navigate = useNavigate();

  const [isLoading] = useState(false);

  const { city, country } = selectedContact?.city
    ? extractCityAndCountry(selectedContact?.city)
    : { city: "", country: "" };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="!w-8/12">
      <ModalHeader
        title="Clientes"
        subtitle="Detalhes do cliente"
        onClose={onClose}
      />
      {isLoading ? (
        <LoadingPlaceholder />
      ) : (
        <div className=" bg-white grid grid-cols-12 p-4 rounded-sm space-y-1 space-x-2">
          <div className="col-span-2 place-self-center">
            <img
              src={selectedContact?.photo || Icon}
              className="w-20 h-20 rounded-md"
            />
          </div>
          <div className="flex flex-col col-span-7 space-y-5">
            <div className="w-full flex flex-row space-x-2">
              <div className="text-2xl font-light text-gray-500">
                {selectedContact?.name} {selectedContact?.lastName}
              </div>
              <div
                className={cx(
                  "p-1 px-2 rounded-2xl text-center text-sm content-center",
                  TagsConstants["BE_IN_TOUCH"].bgColor,
                  TagsConstants["BE_IN_TOUCH"].textColor
                )}
              >
                {TagsConstants["BE_IN_TOUCH"].label}
              </div>
            </div>
            <div className="text-sm font-light flex flex-row space-x-2 text-gray-500">
              <div className="flex flex-row items-center space-x-2">
                <Mail className="w-5 h-5" />
                <div className="font-light text-base">
                  {" "}
                  {selectedContact?.email}
                </div>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <Phone className="w-5 h-5" />
                <div className="font-light text-base">
                  {maskPhone(selectedContact?.phone)}{" "}
                </div>
              </div>
            </div>
            <div className="text-sm font-light flex flex-row w-full space-x-2 text-gray-500">
              <div className="flex flex-row items-center space-x-2">
                <MapPinned className="w-5 h-5" />
                <div className="font-bold text-xs">{selectedContact?.city}</div>
              </div>
            </div>
            <div className="text-sm font-light flex flex-row w-full space-x-2 text-gray-500">
              <div className="flex flex-row items-center space-x-2">
                <MapPinned className="w-5 h-5" />
                <div className="font-bold text-xs">{country}</div>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <MapPinned className="w-5 h-5" />
                <div className="font-bold text-xs">{city}</div>
              </div>
              {/* <div className="flex flex-row items-center space-x-2">
                <AtSign className="w-5 h-5" />
                <div className="font-bold text-xs">Facebook</div>
              </div> */}
              <div className="flex flex-row items-center space-x-2">
                <CalendarDays className="w-5 h-5" />
                <div className="font-bold text-xs">
                  {maskDateISO(selectedContact?.created ?? "No info")}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3  text-right">
            <Button className="font-medium text-xs w-36">
              Atualizar informações
            </Button>
          </div>
        </div>
      )}
      {/* {isLoading ? (
        <LoadingPlaceholder />
      ) : selectedContact?.groups?.length ? (
        <div className="flex flex-row space-x-2 justify-between !my-8">
          <div className="flex flex-row space-x-2 place-items-center">
            <div className="text-sm font-light">Audience</div>
            <div className="w-5 h-5 font-bold bg-primary/20 text-primary rounded-full text-xs text-center place-content-center">
              {selectedContact?.groups?.length}
            </div>
          </div>
          <button
            onClick={() => navigate("/campaigns/audience")}
            className="flex flex-row space-x-2 place-items-center"
          >
            <div className="text-sm font-semibold text-primary">View All</div>
            <ArrowRight className="w-5 h-5 text-primary" />
          </button>
        </div>
      ) : null}
      {isLoading ? (
        <LoadingPlaceholder />
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {selectedContact?.groups?.map((groupData, index) => (
            <GroupItem group={groupData} key={index} />
          ))}
        </div>
      )} */}
    </Modal>
  );
};

export default ModalDetails;
