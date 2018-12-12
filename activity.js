let second = new Vue({
        el: ".sect",
        data:{
               libBooks: [],
               

        },
        methods:{
              latestBook: function(){
                      var title, author, pages, read, newBook;
                      if($("input#book-title").val() !== "" && $("input#author").val()!=="" && $("input#pages").val()!==""){
                        title = $("input#book-title").val();
                        author = $("input#author").val();
                        pages = $("input#pages").val();
                        read = $("input[name='readOrnot']:checked").val();
                       
                        newBook = new Book(title, author, pages, read);
                        this.libBooks.unshift(newBook);
                        console.log(read);
                        $("input#book-title").val("");
                        $("input#author").val("");
                        $("input#pages").val("");
                        
                      }
                   
              },
              cons: function(){
                      newBook.delete;
              }
        },
        computed:{
                
        }
});

function Book(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        
}

Book.prototype.info =function (){
        if(this.read){
                return `The book's title is ${this.title} by ${this.author}, it has ${this.pages} pages and it has been read`;
        } else{
                return `The book's title is ${this.title} by ${this.author}, it has ${this.pages} pages and it hasn't been read`;
        }
}




//console.log(libBooks);
//libBooks.forEach( details => console.log(details.info()));

 
$(document).ready(function(){
       
        $("div  button.btn").click(function(){
                $("form").toggle(4500);
                
        });
        $(document).on('click','button.close>span',function () {
                $(this).parent().parent().parent().remove();
                
          });
})
