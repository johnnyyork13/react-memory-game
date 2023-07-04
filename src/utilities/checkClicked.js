let foundNotClicked = false;

export default function checkClicked(arr) {
    try {
        for (let i = 0; i < arr.length; i++) {
            //console.log('loop running');
            if (!arr[i].props.clicked) {
                return foundNotClicked;
            }
        }
        foundNotClicked = !foundNotClicked;
        return foundNotClicked;
    } catch (err) {
        return true;
    }
    

    
}