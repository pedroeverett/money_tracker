Expense.delete_all;
Expense.create({name:"bread", value:10, date:"2017-05-20"})
Expense.create({name:"milk", value:12, date:"2017-04-20"})
Expense.create({name:"wine", value:5, date:"2017-03-20"})
Expense.create({name:"cookies", value:3, date:"2017-02-20"})
Expense.create({name:"diesel", value:30, date:"2017-01-20"})
Expense.create({name:"rent", value:100, date:"2017-06-20"})
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
