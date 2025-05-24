const handleDelete = (id) => {
    fetch(`http://localhost:3000/delete-group/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0) {
            alert('Group deleted successfully');
            setMyGroups(myGroups.filter(group => group._id !== id));
        }
    })
    .catch(err => console.error(err));
};
