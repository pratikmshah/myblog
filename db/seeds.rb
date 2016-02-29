# Create admin user
User.create(username: "pratik", password: "pratik", admin: true)

# create 15 posts
user = User.first

10.times do |x|
  Post.create(title: Faker::Book.title, content: '<p>' + Faker::Hipster.paragraph(1 + rand(4)) + '</p>', user_id: user.id)
end
