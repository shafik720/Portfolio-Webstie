import { toast } from "react-toastify";

 // --- creating a popup error message
export const successMsg = (msg) => toast.success(msg || 'Some Error Happened', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
