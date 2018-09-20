Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :test_field, types.String do
    resolve -> (obj, arg, ctx) {
      "Hello World"
    }
  end

  field :user, Types::UserType do
    argument :id, !types.ID 
    resolve -> (obj, arg, ctx) {
      User.find(arg[:id])
    }
  end

  field :allUser, types[Types::UserType] do
    resolve -> (obj, arg, ctx) {
      User.all
    }
  end
end
