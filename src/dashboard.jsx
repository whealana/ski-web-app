import React, { useState } from 'react';
import {Upload, Button} from 'antd';

function UploadButton() {
    return (
        <button>
            Upload Footage
        </button>
    );
}

export default function Dashboard() {
    return (
        <div>
            <h1>
                Ski Dashboard
            </h1>
            <UploadButton />
        </div>
    );
}