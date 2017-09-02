class AddTimeToExpense < ActiveRecord::Migration
  def change
    add_column :expenses, :date, :text
  end
end
