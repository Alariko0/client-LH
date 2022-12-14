import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Checkbox() {
    const [checked, setChecked] = useState(false);
    <ButtonGroup className="mb-2">
        <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant="secondary"
            checked={checked}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
        >
        </ToggleButton>
    </ButtonGroup>
}

export default Checkbox
