# jQuery.ajax()

jQuery.ajax() is asynchronous the same way that setTimeout is asynchronous.

http://api.jquery.com/jquery.ajax/

## Example

```
$.ajax({
  method: 'GET',
  url: 'https://api.github.com/users/airportyh/events',
  success: function(data) {
    
  }
});
```
