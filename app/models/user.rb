class User < ApplicationRecord
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> d7739e3538280e6ab76e7fea71b5ba8c03140270
>>>>>>> a5346a1c32646412ff0a21f69d9fae4e3c1cfbc0
  validates :username, :email_address, uniqueness: true
  validates :username, :email_address, :password_digest, presence: true
  validates :password, length: { minimum: 6 }

  attr_reader :password

  has_many :membership,
  class_name: :Member,
  foreign_key: :user_id,
  primary_key: :id

  has_many :messages,
  class_name: :Message,
  foreign_key: :user_id,
  primary_key: :id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a5346a1c32646412ff0a21f69d9fae4e3c1cfbc0
=======
  validates :username, length: { minimum: 5 }
  validates :email_address, uniqueness: true
  
>>>>>>> basic user model with some model validations
<<<<<<< HEAD
=======
=======
>>>>>>> d7739e3538280e6ab76e7fea71b5ba8c03140270
>>>>>>> a5346a1c32646412ff0a21f69d9fae4e3c1cfbc0
end
