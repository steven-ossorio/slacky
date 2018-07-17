# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a5346a1c32646412ff0a21f69d9fae4e3c1cfbc0
ActiveRecord::Schema.define(version: 2018_07_17_011346) do
=======
ActiveRecord::Schema.define(version: 2018_07_13_004146) do
>>>>>>> basic user model with some model validations
<<<<<<< HEAD
=======
=======
ActiveRecord::Schema.define(version: 2018_07_17_011346) do
>>>>>>> d7739e3538280e6ab76e7fea71b5ba8c03140270
>>>>>>> a5346a1c32646412ff0a21f69d9fae4e3c1cfbc0

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

<<<<<<< HEAD
  create_table "channels", force: :cascade do |t|
    t.integer "workspace_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "members", force: :cascade do |t|
    t.integer "user_id"
    t.integer "workspace_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string "text"
    t.integer "channel_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

=======
>>>>>>> basic user model with some model validations
  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email_address"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> d7739e3538280e6ab76e7fea71b5ba8c03140270
>>>>>>> a5346a1c32646412ff0a21f69d9fae4e3c1cfbc0
    t.string "session_token"
  end

  create_table "workspaces", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
=======
>>>>>>> basic user model with some model validations
  end

end
