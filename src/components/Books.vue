<template>
  <div class="books">
    <h1>Books</h1>
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
  }
}
</script>
