import React, { useState } from 'react';
import {Upload, Button} from 'antd';

const [selectedFile, setSelectedFile] = useState(null);
const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
};

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