// Add a new item to the list
function newItem(){
    
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    
    if (inputValue === '') {
        alert('Write something on your list!');
      } else {
        $('#list').append(li);
        }

    //2. Crossing an item out
    function crossOut() {
        li.toggleClass('strike');
        }
    
        li.on('dblclick', function crossOut() {
            li.toggleClass('strike');
        });

    //3. Add the "X" delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
      crossOutButton.on('click', deleteListItem);
      function deleteListItem(){
    		li.addClass('delete')
    	}

        // Sort items
       $('#list').sortable();
    }
