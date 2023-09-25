const getStored = () => {
    const item = localStorage.getItem('donated-card');
    if(item){
        return JSON.parse(item);
    }
    return [];
}

const donated = (id) => {
    const saveDonation = getStored();
    const duplicate = saveDonation.find(donation => donation == id)
    if(!duplicate){
        saveDonation.push(id);
        localStorage.setItem('donated-card', JSON.stringify(saveDonation))
    }
}

export {getStored, donated}