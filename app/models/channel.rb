class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :workspace,
  foreign_key: :workspace_id,
  class_name: :Workspace,
  primary_key: :id
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Added message association in Channel model
=======
>>>>>>> f7b93e1ee4ba176a357988e6b49d4bc5e9c08e54

  has_many :messages,
  class_name: :Message,
  foreign_key: :channel_id,
  primary_key: :id
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Added Channel table and association to workspace
=======
>>>>>>> Added message association in Channel model
=======
>>>>>>> f7b93e1ee4ba176a357988e6b49d4bc5e9c08e54
end
