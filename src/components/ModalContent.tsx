import { IAssetsData } from "@/interfaces/assets";
import Divider from "./Divider";
import Tag from "./Tag";
import TitleAndText from "./TitleAndText";

const ModalContent: React.FC<Partial<IAssetsData>> = ({ isDeleted, serviceList, name, id, driverName, hardwareName, assetTypeName, licensePlate, fuelLevel, odometer, vinCode }) => {
    return (<div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5">
        <Divider title="base info" className="col-span-2" />
        <TitleAndText title="id" text={id} />
        <TitleAndText title="name" text={name} />
        <TitleAndText title="driverName" text={driverName} />
        <TitleAndText title="hardwareName" text={hardwareName} />
        <TitleAndText title="assetTypeName" text={assetTypeName} />
        <TitleAndText title="licensePlate" text={licensePlate} />
        <TitleAndText title="odometer" text={odometer} />
        <TitleAndText title="vinCode" text={vinCode} />
        <TitleAndText title="fuelLevel" text={fuelLevel} />
        <Tag color={isDeleted ? "blue" : "green"} text="is deleted" className="col-span-2" />


        <Divider title="service List" className="col-span-2" />

        <div className="col-span-2">

            {serviceList?.length === 0 && <p className="">there is no avalible service list</p>}

            {serviceList && serviceList?.length > 0 && serviceList?.map((item, index) => <div key={`${item.title}-${index}`} className="mb-2 flex justify-between items-center border px-2 py-1 rounded-md">

                <div>
                    <TitleAndText title="title" text={item.title} />
                </div>

                {item.createdOn}
            </div>)}
        </div>

    </div>);
}

export default ModalContent;



