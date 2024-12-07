export interface IAssetsData {
    id: number;
    odometer: number;
    engineHours: number;
    name: string;
    vinCode: string;
    driverId: number;
    driverName: string;
    hardwareId: null;
    serialNo: null;
    hardwareName: null;
    assetTypeId: number;
    assetTypeName: string;
    licensePlate: string;
    fuelLevel: number;
    isDeleted: boolean;
    errorCodeList: any[];
    serviceList: IServiceList[];
}

interface IServiceList {
    id: number;
    title: string;
    statusName: string;
    currentDistance: null;
    nextDistance: number;
    createdOn: string;
    updatedAt: null;
    actualServiceDate: null;
}