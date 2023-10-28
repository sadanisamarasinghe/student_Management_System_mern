import React, { useState } from 'react';
import axios from 'axios';

const DeleteStudent = ({ studentId }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);

        try {
            const response = await axios.delete(`http://localhost:8000/stModel/delete/65323ac68b513ad529dbd3df`);
            if (response.status === 200) {
                setDeleted(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div>
            {deleted ? (
                <p>Student deleted successfully!</p>
            ) : (
                <div>
                    <button onClick={handleDelete} disabled={isDeleting}>
                        {isDeleting ? 'Deleting...' : 'Delete Student'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default DeleteStudent;
