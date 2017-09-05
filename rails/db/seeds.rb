TransactionType.delete_all;
Expense.delete_all;

t1 = TransactionType.create({name: "debit"})
t2 = TransactionType.create({name: "credit"})


Expense.create({name:"bread", value:10, transaction_type: t1, date:"2017-05-20"})
Expense.create({name:"milk", value:12, transaction_type: t1, date:"2017-04-20"})
Expense.create({name:"wine", value:5, transaction_type: t1, date:"2017-03-20"})
Expense.create({name:"cookies", value:3, transaction_type: t2, date:"2017-02-20"})
Expense.create({name:"diesel", value:30, transaction_type: t2, date:"2017-01-20"})
Expense.create({name:"rent", value:100, transaction_type: t1, date:"2017-06-20"})
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
