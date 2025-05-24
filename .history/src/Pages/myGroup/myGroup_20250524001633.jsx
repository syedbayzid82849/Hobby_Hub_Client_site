const handleDelete = (id) => {
    fetch(`https://hobbe-hub-server.vercel.app/delete-group/${id}`, {
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
