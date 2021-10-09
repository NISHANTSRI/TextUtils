import React from 'react'

export default function toggleDarkMode(props) {
    return (
        <div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
        </div>
    )
}
