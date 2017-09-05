class TransactionType < ActiveRecord::Base
  has_many :expenses
end
