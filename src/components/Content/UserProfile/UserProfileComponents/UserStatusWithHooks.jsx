import React, { useState, useEffect } from "react";

const UserStatusWithHooks = ({status, updateStatus}) => {
    let [editMode, setEditMode]  = useState(false);
    let [localStatus, setStatus]  = useState(status);
    const activateEditMode = () => {
        setEditMode(true);}
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(localStatus);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(status);
    }, [status]);


    return <div>
        { editMode
            ? <div>
                <input onBlur={deactivateEditMode} onChange={onStatusChange}
                       autoFocus={true} value={localStatus}/>
            </div>
            : <div>
                <span onDoubleClick={activateEditMode}>{status}</span>
            </div>
        }

    </div>
}

export default UserStatusWithHooks;