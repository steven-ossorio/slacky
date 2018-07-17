class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :workspace,
  foreign_key: :workspace_id,
  class_name: :Workspace,
  primary_key: :id
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Added message association in Channel model

  has_many :messages,
  class_name: :Message,
  foreign_key: :channel_id,
  primary_key: :id
<<<<<<< HEAD
=======
>>>>>>> Added Channel table and association to workspace
=======
>>>>>>> Added message association in Channel model
end
