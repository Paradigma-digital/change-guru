import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";

import { Backdrop, Button, Input, ModalWrapper } from "shared/ui";
import { FieldValues, useForm } from "react-hook-form";
import { useModalStore } from "entities/Modal";

export const RecoveryPasswordModal = observer(() => {
  const [showModal, setShowModal] = useState(false);

  const { recoveryModalIsOpen, handleOpenRecoveryModal } = useModalStore();

  useEffect(() => {
    setShowModal(recoveryModalIsOpen);
  }, [recoveryModalIsOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      handleOpenRecoveryModal();
    }, 300);
  };

  if (!recoveryModalIsOpen) {
    return null;
  }
  return (
    <Backdrop handleClose={handleClose} show={showModal}>
      <ModalWrapper
        title="Password recovery"
        body={<BodyModal />}
        onClose={handleClose}
      />
    </Backdrop>
  );
});

const BodyModal = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  return (
    <div className={s.body}>
      <Input id="email" register={register} placeholder="Email/ID" />
      <Button onClick={() => {}} className={s.recoveryBtn}>
        Send recowery email
      </Button>
    </div>
  );
};
