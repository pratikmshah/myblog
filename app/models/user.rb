class User < ActiveRecord::Base
  has_many :posts

  validates :username, presence: true,
                       uniqueness: { case_sensitive: false },
                       limit: 50
  validates :password_digest, presence: true

  has_secure_password   # enable use of bcrypt
end
