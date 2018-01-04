import $ from 'jquery';
import template from "../template/user.hbs"

const user = {
  name: "Huzj",
  age: 18,
  photo: 'https://images.unsplash.com/photo-1485832329521-e944d75fa65e?auto=format&fit=crop&w=750&q=80'
}

console.log("huzj")
$(function() {
  let item = $(template(user));
  item.appendTo($('#root'))
})