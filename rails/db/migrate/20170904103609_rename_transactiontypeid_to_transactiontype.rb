class RenameTransactiontypeidToTransactiontype < ActiveRecord::Migration
  def change
    rename_column :expenses, :transaction_type_id_id, :transaction_type_id
  end
end
