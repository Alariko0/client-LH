import { useState } from "react";

const Checkbox = ({ initialState }) => {
    const [checked, setChecked] = useState(initialState);

    const onClick = (checked) => {
        setChecked(checked);
        // onChange(id, checked);
    }
    return (
        <input
            type="checkbox"
            onChange={e => onClick(e.target.checked)}
            checked={checked}
        />
    )
}

export default Checkbox
