

PostList = new Mongo.Collection("postList");


if (Meteor.isClient) {
  

  Template.header.helpers({
   
  });

  Template.postList.helpers({
    projects: function () {
        all = PostList.find({}).fetch();
        chunks = [];
        size = 3;
        while (all.length > size) {
            chunks.push({ row: all.slice(0, size)});
            all = all.slice(size);
        }
        chunks.push({row: all});
        return chunks;
    }
});

  

  Template.posts.helpers({
    rowCount: function(){
      var postCount = PostList.find().count();
      var rowArray = [];
      for (var i = 0; i < Math.ceil(postCount/3); i++){
        rowArray.push("row" + i);
      }
      return rowArray;
    }
   
  });

  Template.postItem.helpers({
    posts: function (){
      return PostList.find();
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
