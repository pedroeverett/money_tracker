class ExpensesController < ApplicationController

  def expense_params
    params.require(:expense).permit([:name, :value, :date])
  end

  # def index
  #   expenses = Expense.all.order(:date)
  #   render :json => expenses.to_json().
  # end

  def index
    expenses = Expense.all.order(:date)
    # render :json => gigs.as_json({include: :venue}) #gives all data from venue
    # render :json => expenses.as_json({include: {transaction_type: {only: :name}}}) #just gives the name of the venue
    render :json => expenses.as_json(include: {transaction_type: {only: :name}}, only: [:id, :name, :value, :date]) #just gives the name of the venue
  end

  # def create
  #   expense = Expense.create(expense_params)
  #   render :json => expense
  # end

  def create
    transaction_type_name = params[:transaction_type]
    
    transaction_types = TransactionType.all
    found_transaction_type = transaction_types.select { |transaction_type| transaction_type.name == transaction_type_name }.first
    
    expense = Expense.new(expense_params)
    expense.transaction_type_id = found_transaction_type.id
    expense.save()
    render :json => expense
  end 

  def show
    expense = Expense.find(params[:id])
    render :json => expense
  end

  # def edit
  # end

  def destroy
    expense = Expense.find(params[:id])

    if expense.destroy
      render :json => {status: :sucess}
    else
      render :json => {status: :delete_failed}
    end
  end

  def update
    expense = Expense.find(params[:id])

    if expense.update_attributes(expense_params)
      render :json => expense
    else
      render :json => {status: :update_failed}
    end
  end


end