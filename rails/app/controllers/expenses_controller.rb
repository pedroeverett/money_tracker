class ExpensesController < ApplicationController

  def expense_params
    params.require(:expense).permit([:name, :value, :date])
  end

  def index
    expenses = Expense.all
    render :json => expenses.to_json()
  end

  def create
    expense = Expense.create(expense_params)
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