class addComment {
    constructor (user,content,isDisplay){
        this.user = user;
        this.content = content;
        this.isDisplay = isDisplay
    }
    display() {
        console.log("Komentarz: " + "\n " + ((this.isDisplay) == true ? (this.user + "\n " + this.content) : "Komentarz zablokowany"));
    }
}

var newContent = new addComment("Jolka", "blablablabala", true);
newContent.display();