import { toast } from "react-toastify";

const autoCloseTime = {
   autoClose: 1250,
};

const toastSuccess = (message) => toast.success(message, autoCloseTime);
const toastError = (message) => toast.error(message, autoCloseTime);
const toastInfo = (message) => toast.info(message, autoCloseTime);
const toastDefault = (message) => toast(message, autoCloseTime);

export { toastSuccess, toastError, toastInfo, toastDefault };
