import { useHMSStore, useHMSActions, selectPermissions } from "@100mslive/react-sdk";

export default function EndRoomButton() {
    const permissions = useHMSStore(selectPermissions);
    const hmsActions = useHMSActions();

    const endRoom = async () => {
        try {
            const lock = false; // set to true to disallow rejoins
            const reason = 'party is over';
            await hmsActions.endRoom(lock, reason);
        } catch (error) {
            // Permission denied or not connected to room
            console.error(error);
        }
    };

    return permissions.endRoom ? <button className="rounded-md bg-red-500 px-4 py-2 text-white" onClick={endRoom}>End</button> : null;
}
