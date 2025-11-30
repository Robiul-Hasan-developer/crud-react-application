
const Overlay = ({ onHandleRemoveModal }) => {
    return (
        <div className='bg-black/75 w-full h-full fixed start-0 end-0 z-[9]' onClick={onHandleRemoveModal}></div>
    );
};

export default Overlay;