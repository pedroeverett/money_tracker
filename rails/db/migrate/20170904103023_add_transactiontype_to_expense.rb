class AddTransactiontypeToExpense < ActiveRecord::Migration
  def change
    add_reference :expenses, :transaction_type_id, index: true, foreign_key: true
  end
end
