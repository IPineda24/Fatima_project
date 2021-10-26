function searchFilter(orderBy, type){
    let dataFiltered;
    if(type == "ram"){
        dataFiltered = students.filter(student => {
            return student.score > orderBy;
        })
    }else if (type == "marca") {
        dataFiltered = students.filter(student => {
            return student.score == orderBy;
        })
    }
}