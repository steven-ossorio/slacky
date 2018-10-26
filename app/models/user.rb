class User < ApplicationRecord
  validates :username, :email, uniqueness: true
  validates :username, :email, :password_digest, presence: true, on: :create
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :membership,
  class_name: :Member,
  foreign_key: :user_id,
  primary_key: :id

  has_many :messages,
  class_name: :Message,
  foreign_key: :user_id,
  primary_key: :id

  has_many :workspaces, through: :membership, source: :workspace

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
end
