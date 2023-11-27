"use client";

interface ModalButtonProps {
  text: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ text }) => {
  return (
    <button className="p-3 flex items-center px-4 font-medium space-x-3 rounded-full hover:bg-gray-50 ring-1 ring-gray-200 shadow-sm duration-500">
      <h3 className="text-xs">{text}</h3>
    </button>
  );
};

export default ModalButton;
