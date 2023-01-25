const number = document.getElementById('number');
const edit_no = document.getElementById('edit-btn-no');
const done_no = document.getElementById('done-btn-no');

done_no.style.display = "none";

edit_no.addEventListener("click", function() {
    number.contentEditable = true;
    done_no.style.display = "inline";
    number.style.backgroundColor = "#dddbdb";
  } )
  
done_no.addEventListener("click", function() {
    number.contentEditable = false;
    number.style.backgroundColor = "#fff";
    done_no.style.display = "none";
  } )

document.getElementById('number').addEventListener('keypress', (evt) => {
    if (evt.key === 'Enter') {
        evt.preventDefault();
    }
});

const address = document.getElementById('locations');
const edit_add = document.getElementById('edit-btn-address');
const done_add = document.getElementById('done-btn-address');

done_add.style.display = "none";

edit_add.addEventListener("click", function() {
    locations.contentEditable = true;
    done_add.style.display = "inline";
    locations.style.backgroundColor = "#dddbdb";
  } )
  
done_add.addEventListener("click", function() {
    locations.contentEditable = false;
    locations.style.backgroundColor = "#fff";
    done_add.style.display = "none";
  } )

document.getElementById('locations').addEventListener('keypress', (evt) => {
    if (evt.key === 'Enter') {
        evt.preventDefault();
    }
});