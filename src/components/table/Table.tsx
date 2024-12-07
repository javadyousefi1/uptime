"use client"
import { TableProps } from "@/interfaces/table";
import { useMemo } from "react";

function Table<T>({ column }: TableProps<T>) {
    const data = [{
        "id": 90,
        "odometer": 449,
        "engineHours": 460,
        "name": "Xiong Rui",
        "vinCode": "yg2AxIFEDj",
        "driverId": 5,
        "driverName": "string string",
        "hardwareId": null,
        "serialNo": null,
        "hardwareName": null,
        "assetTypeId": 3,
        "assetTypeName": "kik",
        "licensePlate": "I4RVT4jm",
        "fuelLevel": 734,
        "isDeleted": false,
        "errorCodeList": [

        ],
        "serviceList": [

        ]
    },
    {
        "id": 89,
        "odometer": 979,
        "engineHours": 306,
        "name": "Maruyama Akina",
        "vinCode": "rOIm0oDGdU",
        "driverId": 1,
        "driverName": "muhammad habibpour",
        "hardwareId": null,
        "serialNo": null,
        "hardwareName": null,
        "assetTypeId": 6,
        "assetTypeName": "kik",
        "licensePlate": "CbaypDXL",
        "fuelLevel": 502,
        "isDeleted": false,
        "errorCodeList": [

        ],
        "serviceList": [

        ]
    },]
    const columnList = useMemo(() => column?.map(item => item.title), [column])

    return (<table border={1} className="w-full border mt-10">
        <tbody>
            <tr>
                {columnList.length > 0 && columnList.map(item => <th key={`table-col-${item}`}>{item}</th>)}
            </tr>
            {data.map((item, index) => {
                return (
                    <tr className="border">
                        {column.map((innerItem, innerIndex) => <td key={`table-row-${index}-${innerIndex}`}>{innerItem.render ? innerItem.render(item) : item[innerItem.title]}</td>)}
                    </tr>
                )
            })}
        </tbody>
    </table>);
}

export default Table;