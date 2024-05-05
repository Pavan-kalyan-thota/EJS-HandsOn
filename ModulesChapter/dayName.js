const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function dayName(day){
    return names[day];
}

export function dayNumber(name){
    return names.indexOf(name);
}