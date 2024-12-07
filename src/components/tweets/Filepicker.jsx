import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { GrGallery } from "react-icons/gr";

const FileInput = forwardRef((props, ref) => {
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);

        if (selectedFiles.length > 2) {
            setError('Only 2 files allowed');
            setFiles([]);
        } else {
            console.log('files',selectedFiles)
            setFiles(selectedFiles);
            setError('');
        }
    };

    useImperativeHandle(ref, () => ({
        getFiles: () => files,
        clearFiles: () => setFiles([]),
        openFileInput: () => {
            fileInputRef.current.click();
        }
    }));
    console.log('files in filepicker',files)

    return (
        <div>
            <button type="button" onClick={handleIconClick}>
                <GrGallery size={24} />
            </button>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                multiple
            />
            {error && <p className='text-red-500'>{error}</p>}
           
        </div>
    );
});

export default React.memo(FileInput);
