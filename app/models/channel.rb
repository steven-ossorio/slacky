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
<<<<<<< HEAD
=======
>>>>>>> Added message association in Channel model
=======
>>>>>>> f7b93e1ee4ba176a357988e6b49d4bc5e9c08e54
>>>>>>> c111c605b55e66afa1c17d4e804bce3c0e90e497

  has_many :messages,
  class_name: :Message,
  foreign_key: :channel_id,
  primary_key: :id
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c111c605b55e66afa1c17d4e804bce3c0e90e497
=======
>>>>>>> Added Channel table and association to workspace
=======
>>>>>>> Added message association in Channel model
<<<<<<< HEAD
=======
=======
>>>>>>> f7b93e1ee4ba176a357988e6b49d4bc5e9c08e54
>>>>>>> c111c605b55e66afa1c17d4e804bce3c0e90e497
end
