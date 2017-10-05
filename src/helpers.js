export function format(input){
  let numbers = input.toString().split('').reverse();
  for(let i=1; i<numbers.length; i++){
    if(i%3===0){
      numbers[i] += ',';
    }
  }
  return numbers.reverse().join('');
}

export function formatDate(timestamp) {
  let date = new Date(timestamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  let formattedTime = month + '/' + day + '/' + year;
  return formattedTime;
}

export function sort(array, option){
  switch (option) {
    case 'Mastery Points':
      return array.sort((a,b) => {
        return b.championPoints - a.championPoints
      })
    case 'Name':
      let result = array.sort(compareNames);
      return result
    case 'Most Recently Played':
      return array.sort((a,b) => {
        return b.lastPlayTime - a.lastPlayTime
      })
    case 'Chest Earned: Yes':
      return array.filter(a => {
        return a.chestGranted
      });
    case 'Chest Earned: No':
      return array.filter(a => {
        return !a.chestGranted
      });
    default:
      return array;
    }
}

export function chest(bool){
  return bool ? 'Yes' : 'No';
}

function compareNames(a,b){
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
}
