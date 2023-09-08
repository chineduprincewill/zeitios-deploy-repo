const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${
            isOpen ? "opacity-100 visible " : "opacity-0 invisible"
          } transition-opacity duration-300`}
        >
          <div
            className="fixed inset-0 bg-[#000000B2] bg-opacity-50"
            onClick={closeModal}
          ></div>

          <div className="bg-white max-w-1/2 rounded-lg shadow-lg relative">
            <div className="  bg-[#0259DB] py-4 rounded-tr-lg rounded-tl-lg">
              <p className=" font-[400] text-center text-white text-[20px]">
                Reason
              </p>
            </div>

            <div className="p-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
