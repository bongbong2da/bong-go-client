import { create } from "zustand";

interface ConfirmProps {
  title?: string;
  content?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface UIStoreType {
  isShowModal: boolean;
  setIsShowModal: (isShowModal: boolean) => void;
  confirmProps: ConfirmProps;
  isShowConfirm: boolean;
  showConfirm: (confirmProps: ConfirmProps) => void;
}

export const useUIStore = create<UIStoreType>((set) => ({
  isShowModal: false,
  setIsShowModal: (isShowModal) => set({ isShowModal }),
  isShowConfirm: false,
  confirmProps: {},
  showConfirm: (props: ConfirmProps) => {
    set({ isShowConfirm: true });
    set({
      confirmProps: {
        title: props.title,
        content: props.content,
        confirmText: props.confirmText,
        cancelText: props.cancelText,
        onConfirm: async () => {
          props?.onConfirm && (await props.onConfirm());
          set({ isShowConfirm: false });
        },
        onCancel: async () => {
          props?.onCancel && (await props.onCancel());
          set({ isShowConfirm: false });
        },
      },
    });
  },
}));
