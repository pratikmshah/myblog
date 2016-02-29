class Comment < ActiveRecord::Base
  belongs_to :post
  has_many :comments

  validates :commenter, presence: true
  validates :body, presence: true
end
