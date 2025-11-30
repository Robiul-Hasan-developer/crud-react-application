import { Frown } from "lucide-react";

const NoDataFound = () => {
    return (
        <div className='text-center'>
            <span className="flex justify-center text-orange-500">
                <Frown className="size-10" />
            </span>
            <h2 className="text-3xl mt-2">Not data found!</h2>
        </div>
    );
};

export default NoDataFound;