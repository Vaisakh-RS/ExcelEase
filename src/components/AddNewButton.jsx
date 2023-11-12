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
                Add New
            </button>
        </>
    );
};

export default AddNewButton;
