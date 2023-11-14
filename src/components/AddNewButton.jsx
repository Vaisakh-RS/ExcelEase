
import '../styles/addNewButton.css';

const AddNewButton = ({ onAddNew }) => {
    return (
        <>
            <button
                onClick={() => {
                    onAddNew();
                }}
                className="addNewBtn"
            >
                Add New Row
            </button>
        </>
    );
};

export default AddNewButton;
