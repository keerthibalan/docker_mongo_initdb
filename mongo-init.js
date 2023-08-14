// Setup Admin database and access control
db.adminCommand("listDatabases");
admin_db = db.getSiblingDB("admin");

const users = [
    {user: "sa", pwd: "100%admin", roles: [{role: "userAdminAnyDatabase", db: "admin" }, {role: "root", db: "admin"}]},
    {user: "admin", pwd: "100%admin", roles: [{role: "readWrite", db: "tutorialdb"}]}
]

users.forEach(function(user){
    if (admin_db.getUser(user.user) === null ) {
        admin_db.createUser(user)
    }
});

db.adminCommand("listDatabases");
tutorial_db = db.getSiblingDB("tutorialdb");
tutorial_db.createCollection("user");
tutorial_db.createCollection("user_group");
tutorial_db.createCollection("group_role");
tutorial_db.createCollection("privileges");
tutorial_db.user.createIndex({"id": 1, "user_name": 1}, {unique: true});
