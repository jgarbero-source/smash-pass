# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding users"

User.create(
    name: "Johnny Boy",
    email: "yo@gmail.com",
    username: "JB",
    password: "123456",
    age: 21,
    gender: "male",
    sexuality: "gay",
    location: "Chicago",
    bio: "Coolest guy in town"
)

User.create(
    name: "Bohnny Joy",
    email: "no@gmail.com",
    age: 22,
    username: "BJ",
    password: "654321",
    gender: "male",
    sexuality: "gay",
    location: "New York",
    bio: "sweetest guy in town"
)

User.create(
    name: "Jules",
    email: "no@gmail.com",
    age: 22,
    username: "Jules",
    password: "654321",
    gender: "male",
    sexuality: "gay",
    location: "Nashville",
    bio: "sweetest guy in town"
)

User.create(
    name: "Bools",
    email: "yo@gmail.com",
    username: "bools",
    password: "123456",
    age: 21,
    gender: "male",
    sexuality: "gay",
    location: "Smashville",
    bio: "Long-dickedest guy in town"
)

User.create(
    name: "Extra",
    email: "yo@gmail.com",
    username: "extra",
    password: "1111",
    age: 21,
    gender: "male",
    sexuality: "gay",
    location: "nowhere",
    bio: "blah blahs"
)

puts "seeding matches"

Match.create(
    user_id: 2,
    target: 1,
    swipe: true
)

Match.create(
    user_id: 4,
    target: 1,
    swipe: true
)

Match.create(
    user_id: 3,
    target: 1,
    swipe: false
)