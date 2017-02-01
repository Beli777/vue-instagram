<template>
  <div class="books">
    <h1>Books</h1>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Add Book</h3>
        </div>
        <div class="panel-body">
            <form id="form" class="form-block" v-on:submit.prevent="addBook">
                <div class="form-group">
                    <label for="bookTitle">Title:</label>
                    <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
                </div>
                <div class="form-group">
                    <label for="bookAuthor">Author:</label>
                    <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
                </div>
                <div class="form-group">
                    <label for="bookUrl">URL:</label>
                    <input type="text" id="bookurl" class="form-control" v-model="newBook.url">
                </div>
                <input type="submit" class="btn btn-primary" value="Add Book">
            </form>
        </div>
    </div>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Books list</h3>
        </div>
        <div class="panel-body">
            <table class="table table-striped">
              <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Author
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="book in books">
                      <td>
                          <a v-bind:href="book.url">{{book.title}}</a>
                      </td>
                      <td>
                          {{book.author}}
                      </td>
                      <td>
                          <span v-on:click='removeBook(book)'>X</span>
                      </td>
                  </tr>
              </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyDtNsg5hYaY8ui1XdOkG67LeOrlycfMkb0",
    authDomain: "vuejs-firebase-02-afe0e.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-02-afe0e.firebaseio.com",
    storageBucket: "vuejs-firebase-02-afe0e.appspot.com",
    messagingSenderId: "922308194421"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let booksRef = db.ref('books');

export default {
  name: 'books',
  firebase: {
      books: booksRef
  },
  data () {
      return{
          newBook: {
              title: '',
              author: '',
              url: ''
          }
      }
  },
  methods: {
    addBook: function(){
        booksRef.push(this.newBook);
        this.newBook.title = '';
        this.newBook.author = '';
        this.newBook.url = '';
    },
    removeBook: function(book){
        booksRef.child(book['.key']).remove();
    }
  }
}
</script>
